import React, { useEffect, useState } from "react";
import Sketch from "react-p5";

const ConnectedLines = () => {
  let points = [];
  const maxDistance = 165;
  const mouseRepelForce = 2; // ความเร็วที่จุดจะหนีออกจากเมาส์
  const initialSpeed = 0.2; // ความเร็วเริ่มต้นช้าๆ
  const [numPoints, setNumPoints] = useState(65); // จำนวนจุดเริ่มต้น
  
  let canvas = null;

  const setup = (p5, canvasParentRef) => {
    if (canvas) {
      canvas.remove(); // ลบ canvas เดิมก่อนสร้างใหม่
    }
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    points = []; // รีเซ็ตจุด
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: p5.random(p5.width * 0.1, p5.width * 0.9), // ขยายเป็น 80% ของหน้าจอ
        y: p5.random(p5.height * 0.1, p5.height * 0.9), // ขยายเป็น 80% ของหน้าจอ
        vx: p5.random(-initialSpeed, initialSpeed), // ความเร็วเริ่มต้นแบบสุ่ม (ช้าๆ)
        vy: p5.random(-initialSpeed, initialSpeed),
      });
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.stroke("#fbca79");
    p5.strokeWeight(2);
    p5.fill("#fbca79");

    points.forEach((point) => {
      p5.circle(point.x, point.y, 6);

      // คำนวณระยะห่างระหว่างจุดกับเมาส์
      let distanceToMouse = p5.dist(p5.mouseX, p5.mouseY, point.x, point.y);

      // เมาส์เข้าใกล้ ให้จุดเคลื่อนที่หนีออกจากเมาส์
      if (distanceToMouse < 100) {
        let angle = p5.atan2(point.y - p5.mouseY, point.x - p5.mouseX);
        point.vx += Math.cos(angle) * mouseRepelForce;
        point.vy += Math.sin(angle) * mouseRepelForce;
      }

      // ลดความเร็วเล็กน้อยเมื่อไม่มีผลจากเมาส์ (แรงเสียดทาน)
      point.vx *= 0.98;
      point.vy *= 0.98;

      // ปรับตำแหน่งตามความเร็ว
      point.x += point.vx;
      point.y += point.vy;

      // ให้จุดสะท้อนกลับเมื่อถึงขอบ
      if (point.x < p5.width * 0.2 || point.x > p5.width * 0.8) point.vx *= -1;
      if (point.y < p5.height * 0.2 || point.y > p5.height * 0.8) point.vy *= -1;

       // คำนวณค่า alpha สำหรับจุด (circle)
      let distanceToCenter = p5.dist(point.x, point.y, p5.mouseX, p5.mouseY);
      let alphaCircle = p5.map(distanceToCenter, 255); // ลดความโปร่งใสจาก 100 ไป 20

      p5.stroke(251, 202, 121, alphaCircle); // ความโปร่งใสของจุด
      p5.fill(251, 202, 121, alphaCircle);
      p5.circle(point.x, point.y, 6); // วาดจุด

      points.forEach((otherPoint) => {
        let distance = p5.dist(point.x, point.y, otherPoint.x, otherPoint.y);
        if (distance < maxDistance) {
          //เพิ่มความโป่งใส
          let alpha = p5.map(distance, 0, maxDistance, 150, 50); 
          p5.stroke(251, 202, 121, alpha); // สีและค่าความโปร่งใส
          p5.line(point.x, point.y, otherPoint.x, otherPoint.y);
        }
      });
    });
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

    // เมื่อหน้าจอมีขนาด max-width 768px
    if (p5.windowWidth <= 768) {
      setNumPoints(32); // ลดจำนวนจุดลง 
    } else {
      setNumPoints(90); // maxwidth 768px
    }

    points = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: p5.random(p5.width * 0.1, p5.width * 0.9), // ขยายเป็น 80% ของหน้าจอ
        y: p5.random(p5.height * 0.1, p5.height * 0.9),
        vx: p5.random(-initialSpeed, initialSpeed),
        vy: p5.random(-initialSpeed, initialSpeed),
      });
    }
  };

  useEffect(() => {
    return () => {
      if (canvas) {
        canvas.remove(); // ลบ canvas เมื่อคอมโพเนนต์ unmount
      }
    };
  }, []);

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default ConnectedLines;
