function animate(from, to, time) {
    const circle = two.makeCircle(from.x, from.y, 3);
    circle.fill = "#fff";
    circle.stroke = "#000";
    circle.linewidth = 1;
  
    function moveCloser(from, to, step, speed) {
      const xMatch = from.x -step < to.x && from.x+step > to.x;
      const yMatch = from.y -step < to.y && from.y+step > to.y;
      if (!xMatch || !yMatch) {
        const xStep = xMatch ? 0 : to.x > from.x ? step : -step;
        const yStep = yMatch ? 0 : to.y > from.y ? step : -step;
        from.x += xStep;
        from.y += yStep;
        circle.translation.set(from.x, from.y);
        two.update();
        setTimeout(() => moveCloser(from, to, step, speed), speed);
      }
    }
  
    const xDistance = Math.abs(from.x - to.x);
    const yDistance = Math.abs(from.y - to.y);
    const speed = 100;
    const step = (Math.max(xDistance, yDistance) / time) * speed;
    moveCloser({ ...from }, { ...to }, step, speed);
  }