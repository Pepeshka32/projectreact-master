import React from "react";
import { Link } from 'react-router-dom';

export function Signin() {
  return (
<div class="in-div">
    <div className="pathway">
        <Link to="/" className="path1">Домашня сторінка</Link>
        
        <Link to="/signin" className="path1">Вхід</Link>
    </div>
</div>
  );
}
