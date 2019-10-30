function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var rotate180Angle = Math.PI  ;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    var x = player2.graphic.position.x + WIDTH / 2;

    if ( x < 0 )
        player2.turnRight(rotate180Angle);
    if ( x > WIDTH )
        player2.turnRight(rotate180Angle);
    player2.accelerate(100 * delta);


    player1.move();
    player2.move();
    controls.update();
}