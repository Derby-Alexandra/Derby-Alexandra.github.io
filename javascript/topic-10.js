function drawcanvas() {
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#FF8852";
    ctx.fillRect(100,0,150,75);
    
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(100, 100, 50, 50);
    
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(275, -5, 125, 125);
    ctx.fillRect(200, 200, 300, 200);
    
    ctx.fillStyle = 'rgb(200, 0, 0)';
    
    ctx.clearRect(45, 45, 100, 100);
    
    ctx.strokeRect(100, 100, 50, 50);
    ctx.strokeRect(5, 5, 5, 5);
    ctx.strokeRect(15, 15, 5, 5);
    ctx.strokeRect(25, 25, 5, 5);
    ctx.strokeRect(35, 35, 5, 5);
    ctx.strokeRect(45, 45, 5, 5);
    ctx.strokeRect(55, 55, 5, 5);
    ctx.strokeRect(65, 65, 5, 5);
    
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.stroke();  
    
    ctx.beginPath();
    ctx.arc(400, 180, 40, 0, Math.PI * 2, true);
    ctx.moveTo(200, 150);
    ctx.fillStyle = "#FF8852";
    ctx.fill();
    

}