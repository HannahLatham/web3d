document.addEventListener('DOMContentLoaded', function() {
    console.log("Page fully loaded and scripts ready to execute.");

    // Variables to handle the rotation
    let rotateInterval;
    let rotationAngle = 0;


    // Functions to swap models
    window.ToCanCoke = function(id) {
        console.log("Switching to Coke model");
        var x3dModel = document.getElementById(id);
        x3dModel.setAttribute('url', 'coke/can.x3d');
    };

    
    /*
    window.ToCanSprite = function(id) {
        console.log("Switching to Sprite model");
        var x3dModel = document.getElementById(id);
        x3dModel.setAttribute('url', 'sprite/sprite2.x3d');
    };*/

    window.changeTexture = function(id, url) {
        console.log(url);
    
        // Correctly access the texture node using namespace and DEF name
        var textureNode = document.getElementById(id);
        if (textureNode) {
            textureNode.setAttribute('url', url);
            console.log('Texture updated successfully.');
        } else {
            console.error('Failed to access the texture node.');
        }
    };





    window.ToCanFanta = function(id) {
        console.log("Switching to Fanta model");
        var x3dModel = document.getElementById(id);
        x3dModel.setAttribute('url', 'glassbottle/glassbottle.x3d'); 
    };



    // Functions to control the rotation of the model
    window.startRotationX = function(id) {
        console.log("Starting rotation");
        if (!rotateInterval) {
            rotateInterval = setInterval(function() {
                rotationAngle = (rotationAngle + 0.1) % (2 * Math.PI); // Keeps the angle within a full circle
                let canTransform = document.getElementById(id);
                canTransform.setAttribute('rotation', `0 1 0 ${rotationAngle}`);
            }, 30); // Control the speed of rotation
        }
    };

    window.startRotationY = function(id) {
        console.log("Starting rotation");
        if (!rotateInterval) {
            rotateInterval = setInterval(function() {
                rotationAngle = (rotationAngle + 0.1) % (2 * Math.PI); // Keeps the angle within a full circle
                let canTransform = document.getElementById(id);
                canTransform.setAttribute('rotation', `1 0 0 ${rotationAngle}`);
            }, 30); // Control the speed of rotation
        }
    };

    window.stopRotation = function() {
        console.log("Stopping rotation");
        clearInterval(rotateInterval);
        rotateInterval = null;
    };



    //Camera views
    window.sideView = function(id) {
        let view = document.getElementById(id);
        if (view) {
            console.log("Viewpoint element found, changing view...");
            view.setAttribute('position', '10 0 0'); 
            view.setAttribute('orientation', '0 1 0 1.57'); 
        } else {
            console.log("Error: Viewpoint element with ID 'frontView' not found.");
        }
    }

    window.frontView = function(id) {
        let view = document.getElementById(id);
        if (view) {
            console.log("Viewpoint element found, changing view...");
            view.setAttribute('position', '0 0 10'); 
            view.setAttribute('orientation', '0 1 0 0'); 
        } else {
            console.log("Error: Viewpoint element with ID 'frontView' not found.");
        }
    }


    //wireframe
    window.toggleWireframe = function(id) {
        var model = document.getElementById(id);
      
            model.runtime.togglePoints(true);
            model.runtime.togglePoints(true);
    }




});




//fix the sizing issue for the models

function adjustX3DElementSize() {
    const x3dElements = document.querySelectorAll('x3d');
    x3dElements.forEach(elem => {
        if (window.innerWidth < 768) {
            elem.style.width = '100%';
            elem.style.height = '300px';
        } else {
            elem.style.width = '100%';
            elem.style.height = '400px';
        }
    });
}

window.addEventListener('resize', adjustX3DElementSize);
adjustX3DElementSize();




    



       