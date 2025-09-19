(() => {
  const canvas = document.getElementById('game-canvas');
  const shell = document.querySelector('.game-shell');
  if (!canvas || !shell) {
    return;
  }

  let scene, camera, renderer, clock;
  let player;
  const obstacles = [];
  let baseSpeed = 0.2;
  let gameSpeed = baseSpeed;
  let spawnInterval = 1500;
  let spawnTimer;
  let gameRunning = false;
  let gravity = 0.02;
  let jumpVelocity = 0;
  let isJumping = false;
  const groundY = 0.5;
  const lateralLimit = 8;
  let elapsedTime = 0;
  let xp = 0;
  let chaser;
  let chaserActive = false;
  let chaserTimer = 0;

  const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false,
    Space: false
  };

  const statusEl = document.getElementById('status');
  const infoEl = document.getElementById('info');
  const recordScreen = document.getElementById('recordScreen');
  const recordText = document.getElementById('recordText');

  function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    camera = new THREE.PerspectiveCamera(75, shell.clientWidth / shell.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    resizeRenderer();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    const floorGeometry = new THREE.PlaneGeometry(20, 1000);
    const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x1f2937 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -500;
    scene.add(floor);

    const wallGeometry = new THREE.BoxGeometry(1, 3, 1000);
    const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x334155 });
    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.position.set(-lateralLimit - 0.5, 1.5, -500);
    scene.add(leftWall);
    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.position.set(lateralLimit + 0.5, 1.5, -500);
    scene.add(rightWall);

    const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
    const playerMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b6b });
    player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.position.set(0, groundY, 0);
    scene.add(player);

    clock = new THREE.Clock();
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
  }

  function resizeRenderer() {
    const width = shell.clientWidth;
    const height = Math.max(shell.clientHeight, 520);
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function onWindowResize() {
    resizeRenderer();
  }

  function onKeyDown(event) {
    if (event.code in keys) {
      keys[event.code] = true;
      if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        jumpVelocity = 0.3;
      }
    }
  }

  function onKeyUp(event) {
    if (event.code in keys) {
      keys[event.code] = false;
    }
  }

  function spawnObstacle() {
    if (Math.random() < 0.3) {
      spawnComplexObstacle();
      return;
    }

    const type = Math.floor(Math.random() * 4);
    let geometry;
    switch (type) {
      case 0:
        geometry = new THREE.BoxGeometry(1.5 + Math.random(), 1.5 + Math.random() * 2, 1.5 + Math.random());
        break;
      case 1:
        geometry = new THREE.ConeGeometry(0.8 + Math.random(), 1.5 + Math.random() * 2, 16);
        break;
      case 2:
        geometry = new THREE.CylinderGeometry(0.8, 0.8, 1.5 + Math.random() * 2, 16);
        break;
      default:
        geometry = new THREE.SphereGeometry(0.8 + Math.random() * 0.5, 16, 16);
        break;
    }
    const material = new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff });
    const obstacle = new THREE.Mesh(geometry, material);
    obstacle.position.x = (Math.random() - 0.5) * lateralLimit * 1.5;
    obstacle.position.y = geometry.parameters.height ? geometry.parameters.height / 2 : 0.8;
    obstacle.position.z = player.position.z - 50;
    scene.add(obstacle);
    obstacles.push(obstacle);
  }

  function spawnComplexObstacle() {
    const group = new THREE.Group();
    const carGeometry = new THREE.BoxGeometry(6, 2, 10);
    const carMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    const trainCar = new THREE.Mesh(carGeometry, carMaterial);
    trainCar.position.set(0, 1, 0);
    group.add(trainCar);

    const rampGeometry = new THREE.BoxGeometry(4, 0.5, 6);
    const rampMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
    ramp.rotation.z = -Math.PI / 9;
    ramp.position.set(-3, 1.2, 2);
    group.add(ramp);

    group.position.z = player.position.z - 60;
    group.position.x = (Math.random() - 0.5) * lateralLimit;
    scene.add(group);
    obstacles.push(group);
  }

  function spawnChaser() {
    const geometry = new THREE.BoxGeometry(1.2, 1.8, 1.2);
    const material = new THREE.MeshPhongMaterial({ color: 0x2563eb });
    chaser = new THREE.Mesh(geometry, material);
    chaser.position.set(0, groundY, 8);
    scene.add(chaser);
    chaserActive = true;
    chaserTimer = 0;
  }

  function updateChaser(delta) {
    if (!chaserActive) return;
    chaser.position.z += (player.position.z - chaser.position.z + 8) * 0.02;
    chaser.position.x += (player.position.x - chaser.position.x) * 0.04;

    chaserTimer += delta;
    if (chaserTimer > 12) {
      scene.remove(chaser);
      chaserActive = false;
    }
  }

  function updatePlayer(delta) {
    const moveSpeed = 10 * delta;
    if (keys.ArrowLeft || keys.KeyA) player.position.x -= moveSpeed;
    if (keys.ArrowRight || keys.KeyD) player.position.x += moveSpeed;

    player.position.x = Math.max(-lateralLimit, Math.min(lateralLimit, player.position.x));

    if (isJumping) {
      player.position.y += jumpVelocity;
      jumpVelocity -= gravity;
      if (player.position.y <= groundY) {
        player.position.y = groundY;
        isJumping = false;
        jumpVelocity = 0;
      }
    }
  }

  function updateObstacles(delta) {
    for (let i = obstacles.length - 1; i >= 0; i -= 1) {
      const obstacle = obstacles[i];
      obstacle.position.z += gameSpeed * delta * 60;
      if (obstacle.position.z > camera.position.z + 10) {
        scene.remove(obstacle);
        obstacles.splice(i, 1);
      }
    }
  }

  function checkCollisions() {
    const playerBox = new THREE.Box3().setFromObject(player);
    for (const obstacle of obstacles) {
      const obstacleBox = new THREE.Box3().setFromObject(obstacle);
      if (playerBox.intersectsBox(obstacleBox)) {
        endGame();
        return;
      }
    }
    if (chaserActive) {
      const chaserBox = new THREE.Box3().setFromObject(chaser);
      if (playerBox.intersectsBox(chaserBox)) {
        endGame();
      }
    }
  }

  function updateUI() {
    if (statusEl) {
      statusEl.textContent = `Status: ${gameRunning ? 'Running' : 'Stopped'}`;
    }
    if (infoEl) {
      infoEl.textContent = `Time: ${elapsedTime.toFixed(1)} s | XP: ${Math.floor(xp)}`;
    }
  }

  function loop() {
    if (!gameRunning) return;

    const delta = clock.getDelta();
    elapsedTime += delta;
    xp += delta * 15;

    gameSpeed = baseSpeed + elapsedTime * 0.02;
    if (elapsedTime > 15 && !chaserActive) {
      spawnChaser();
    }

    updatePlayer(delta);
    updateObstacles(delta);
    updateChaser(delta);
    checkCollisions();

    camera.position.z = player.position.z + 12;
    camera.position.y = 6;
    camera.lookAt(player.position);

    renderer.render(scene, camera);
    updateUI();

    if (spawnTimer === undefined || performance.now() - spawnTimer > spawnInterval) {
      spawnObstacle();
      spawnTimer = performance.now();
    }

    requestAnimationFrame(loop);
  }

  function startGame() {
    resetGame();
    gameRunning = true;
    clock.start();
    spawnTimer = performance.now();
    updateUI();
    requestAnimationFrame(loop);
  }

  function pauseGame() {
    gameRunning = false;
    clock.stop();
    updateUI();
  }

  function endGame() {
    gameRunning = false;
    clock.stop();
    updateUI();
    if (recordScreen) {
      recordScreen.style.display = 'flex';
      if (recordText) {
        recordText.textContent = `You survived ${elapsedTime.toFixed(1)} seconds and earned ${Math.floor(xp)} XP.`;
      }
    }
  }

  function resetGame() {
    obstacles.forEach((obstacle) => scene.remove(obstacle));
    obstacles.length = 0;
    if (chaserActive && chaser) {
      scene.remove(chaser);
      chaserActive = false;
    }
    player.position.set(0, groundY, 0);
    elapsedTime = 0;
    xp = 0;
    baseSpeed = 0.2;
    gameSpeed = baseSpeed;
    spawnInterval = 1500;
    if (recordScreen) {
      recordScreen.style.display = 'none';
    }
  }

  document.getElementById('playBtn')?.addEventListener('click', () => {
    if (!gameRunning) startGame();
  });
  document.getElementById('pauseBtn')?.addEventListener('click', () => {
    pauseGame();
  });
  document.getElementById('restartBtn')?.addEventListener('click', () => {
    startGame();
  });
  document.getElementById('restartGameBtn')?.addEventListener('click', () => {
    startGame();
  });

  init();
  updateUI();
})();
