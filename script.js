 function exportGLTF (input, options) {
      AFRAME.scenes[0].systems['gltf-exporter'].export(input, options);
    }

    document.getElementById('export-scene').addEventListener('click', function () {
      exportGLTF();
    });

    document.getElementById('export-scene-bin').addEventListener('click', function () {
      exportGLTF(undefined, {binary: true});
    });

    document.getElementById('export-sphere').addEventListener('click', function () {
      exportGLTF(document.getElementById('yellowSphere'), {binary: true});
    });

    document.getElementById('export-two').addEventListener('click', function () {
      exportGLTF([document.getElementById('blueBox'), document.getElementById('yellowSphere')]);
    });

    document.getElementById('export-selector').addEventListener('click', function () {
      exportGLTF(document.querySelectorAll("[geometry='primitive: box']"));
    });