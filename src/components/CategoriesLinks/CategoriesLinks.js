import React from "react";
import { Link, NavLink } from "react-router-dom";

const CategoriesLinks = () => {
    return (
        <div className="TopListA">
            <NavLink to="/Projecting">
                <div className="Projecting">
                    Проектирование
                </div>
            </NavLink>
            <NavLink to="/Design">
                <div className="Design">
                    Дизайн интерьера
                </div>
            </NavLink>
            <NavLink to="/Repair">
                <div className="Repair">
                    Ремонт
                </div>
            </NavLink>
            <Link to="/Building">
                <div className="Building">
                    Строительство
                </div>
            </Link>
        </div>
    );
};
export default CategoriesLinks;