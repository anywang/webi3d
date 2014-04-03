var window_width = 600;
var window_height = 400;

function main()
{
    var renderer = new THREE.WebGLRenderer();
    if (window.WebGLRenderingContext)
    	renderer = new THREE.WebGLRenderer();
    else
    	renderer = new THREE.CanvasRenderer();
    renderer.setSize(window_width, window_height);
    document.body.appendChild(renderer.domElement);
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window_width/window_height, 0.1, 1000);
    
    var geometry = new THREE.CubeGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
    
    var render = function () {
        requestAnimationFrame(render);
    
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
    
        renderer.render(scene, camera);
    };
    
    render();

}