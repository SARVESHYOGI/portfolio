// import React, { useEffect, useState } from "react";

// const ParticleAnimation = () => {
//   const [spots, setSpots] = useState([]);
//   const [hue, setHue] = useState(0);
//   const [mouse, setMouse] = useState({ x: undefined, y: undefined });

//   useEffect(() => {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     const handleParticles = () => {
//       for (let i = spots.length - 1; i >= 0; i--) {
//         spots[i].update();
//         spots[i].draw();

//         for (let j = spots.length - 1; j >= 0; j--) {
//           if (i !== j) {
//             const dx = spots[i].x - spots[j].x;
//             const dy = spots[i].y - spots[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < 90) {
//               ctx.beginPath();
//               ctx.strokeStyle = spots[i].color;
//               ctx.lineWidth = spots[i].size / 10;
//               ctx.moveTo(spots[i].x, spots[i].y);
//               ctx.lineTo(spots[j].x, spots[j].y);
//               ctx.stroke();
//             }
//           }
//         }

//         if (spots[i].size <= 0.3) {
//           setSpots((prevSpots) => [
//             ...prevSpots.slice(0, i),
//             ...prevSpots.slice(i + 1),
//           ]);
//         }
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       handleParticles();
//       setHue((prevHue) => prevHue + 1);
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (event) => {
//       setMouse({ x: event.clientX, y: event.clientY });

//       for (let i = 0; i < 3; i++) {
//         setSpots((prevSpots) => [
//           ...prevSpots,
//           new Particle(event.clientX, event.clientY, hue),
//         ]);
//       }
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       setSpots([]);
//     };

//     const Particle = (x, y, hue) => {
//       return {
//         x,
//         y,
//         size: Math.random() * 2 + 0.1,
//         speedX: Math.random() * 2 - 1,
//         speedY: Math.random() * 2 - 1,
//         color: `hsl(${hue}, 100%, 50%)`,
//         update() {
//           this.x += this.speedX;
//           this.y += this.speedY;
//           if (this.size > 0.1) this.size -= 0.03;
//         },
//         draw() {
//           ctx.fillStyle = this.color;
//           ctx.beginPath();
//           ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//           ctx.fill();
//         },
//       };
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [spots, hue]);

//   return <canvas id="canvas"></canvas>;
// };

// export default ParticleAnimation;
