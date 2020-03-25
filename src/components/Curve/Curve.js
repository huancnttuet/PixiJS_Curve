import React from "react";
import * as PIXI from "pixi.js";

const Curve = props => {
  var pixi_cnt = null;

  var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    backgroundColor: 0x808080
  });

  const { points } = props;

  const curve = new PIXI.Graphics();

  curve.lineStyle(2, 0xffffff, 1);
  curve.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length - 2; i++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    curve.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }

  curve.quadraticCurveTo(
    points[points.length - 2].x,
    points[points.length - 2].y,
    points[points.length - 1].x,
    points[points.length - 1].y
  );

  curve.position.x = 50;
  curve.position.y = 50;

  const straightLine = new PIXI.Graphics();

  straightLine.lineStyle(2, 0xaaffff, 1);
  straightLine.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    straightLine.lineTo(points[i].x, points[i].y);
  }

  straightLine.position.x = 50;
  straightLine.position.y = 50;

  const p = [];

  for (let i = 0; i < points.length; i++) {
    p[i] = new PIXI.Graphics();
    // Circle
    p[i].lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    p[i].beginFill(0xde3249, 1);
    // make the button interactive...
    p[i].interactive = true;
    p[i].buttonMode = true;
    p[i].drawCircle(points[i].x, points[i].y, 5);
    p[i].on("pointerover", () => {
      console.log(["over"]);
      console.log(points[i].x);
      console.log(points[i].y);
      text.text = points[i].x.toString() + " , " + points[i].y.toString();
    });
    p[i].on("pointerout", () => {
      text.text = "";
      console.log("out");
    });

    p[i].position.x = 50;
    p[i].position.y = 50;
    app.stage.addChild(p[i]);
  }

  const x = new PIXI.Graphics();
  x.lineStyle(2, 0xffffff, 1);
  x.moveTo(0, 0);
  x.lineTo(1000, 0);
  x.position.x = 50;
  x.position.y = 50;
  app.stage.addChild(x);
  const y = new PIXI.Graphics();
  y.lineStyle(2, 0xffffff, 1);
  y.moveTo(0, 0);
  y.lineTo(0, 500);
  y.position.x = 50;
  y.position.y = 50;
  app.stage.addChild(y);

  const text = new PIXI.Text("");
  text.x = 50;
  text.y = 10;

  app.stage.addChild(text);

  const btn = new PIXI.Text("Click1");
  btn.x = 500;
  btn.y = 10;
  btn.interactive = true;
  btn.buttonMode = true;
  btn.on("pointerdown", () => {
    app.stage.removeChild(curve);
    app.stage.addChild(straightLine);
  });
  app.stage.addChild(btn);
  const btn2 = new PIXI.Text("Click2");
  btn2.interactive = true;
  btn2.buttonMode = true;
  btn2.x = 600;
  btn2.y = 10;
  btn2.on("pointerdown", () => {
    app.stage.removeChild(straightLine);
    app.stage.addChild(curve);
  });
  app.stage.addChild(btn2);

  const btn3 = new PIXI.Text("Ẩn điểm");
  btn3.interactive = true;
  btn3.buttonMode = true;
  btn3.x = 700;
  btn3.y = 10;
  btn3.on("pointerdown", () => {
    p.forEach(element => {
      app.stage.removeChild(element);
    });
  });
  app.stage.addChild(btn3);
  const btn4 = new PIXI.Text("Hiện điểm");
  btn4.interactive = true;
  btn4.buttonMode = true;
  btn4.x = 850;
  btn4.y = 10;
  btn4.on("pointerdown", () => {
    p.forEach(element => {
      app.stage.addChild(element);
    });
  });
  app.stage.addChild(btn4);
  const updatePixiCnt = element => {
    pixi_cnt = element;
    if (pixi_cnt && pixi_cnt.children.length <= 0) {
      pixi_cnt.appendChild(app.view);
    }
  };
  return <div ref={updatePixiCnt}></div>;
};

export default Curve;
