console.log("script loaded")

document.querySelectorAll("circle")
    .forEach(circle => circle
        .addEventListener("mousedown", clickedNode));

function clickedNode(event) {

    const circle = event.target;
    const entireSVG = document.querySelector("#graph");
    entireSVG.addEventListener("mouseover", moveNode)

    function moveNode(moveEvent) {

        const svgRect = entireSVG.getBoundingClientRect();

        const mouseX = moveEvent.clientX - svgRect.x;
        const mouseY = moveEvent.clientY - svgRect.y;

        let inEdge = null;
        let outEdge = null;

         switch (circle.id) {
            case "node1":
                inEdge = document.querySelector("#edgeD");
                outEdge = document.querySelector("#edgeA");
                break;
            case "node2":
                inEdge = document.querySelector("#edgeA");
                outEdge = document.querySelector("#edgeB");
                break;
            case "node3":
                inEdge = document.querySelector("#edgeB");
                outEdge = document.querySelector("#edgeC");
                break;
            case "node4":
                inEdge = document.querySelector("#edgeC");
                outEdge = document.querySelector("#edgeD");
                break;
        }
        console.log("--------------")
        console.log("inEdge", inEdge);
        console.log("outEdge", outEdge);

        circle.setAttribute("cx", mouseX)
        circle.setAttribute("cy", mouseY)

        inEdge.setAttribute("x2", mouseX);
        inEdge.setAttribute("y2", mouseY);
        outEdge.setAttribute("x1", mouseX);
        outEdge.setAttribute("y1", mouseY);
    }

    entireSVG.addEventListener("mouseup", releaseNode);

    function releaseNode() {
        entireSVG.removeEventListener("mouseover", moveNode);
        entireSVG.removeEventListener("mouseup", releaseNode);

    }



}

