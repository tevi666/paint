import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/ToolBar.scss'
import Brush from '../tools/Brush';
import Eraser from '../tools/Eraser';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import Line from '../tools/Line';

const ToolBar = () => {

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setSFillColor(e.target.value)

    }
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect" onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}/>
            <button className="toolbar__btn circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}/>
            <button className="toolbar__btn eraser" onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" onClick={()=> toolState.setTool(new Line(canvasState.canvas))}/>
            <input onChange={e => changeColor(e)} style={{marginLeft:50}} type="color"/>
            <button className="toolbar__btn undo" onClick={()=> canvasState.undo()}/>
            <button className="toolbar__btn redo" onClick={()=> canvasState.redo()}/>
            <button className="toolbar__btn save"/>




        </div>
    );
};

export default ToolBar;