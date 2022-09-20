import React from "react";
import "./list.scss";

export const List = (props) => {
    const { type, close, items, styleType='list--default', customClass } = props;

    const generateList = (items = []) => {
        return items.map((item, i) => {
            return (
                <li className="list-item" key={"item" + i + Math.random()}>
                    {item.title || "no title"} { close ? <button onClick={()=> props?.deleteItem(item.id)} className="list-item-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></button>:'' }

                    {item?.subItem?.length > 0 ? (
                        type == "ul" ? (
                            <ul>{generateList(item.subItem)}</ul>
                        ) : (
                            <ol>{generateList(item.subItem)}</ol>
                        )
                    ) : (
                        ""
                    )}
                    
                </li>
            );
        });
    };

    if(!items?.length) {
        return <p>Todo list is impty!</p>
    }

    return type == "ul" ? (
        <ul className={`list list-unorder ${customClass || "", styleType}`}>
            {generateList(items)}
        </ul>
    ) : (
        <ol className={`list list-order ${customClass || ""}`}>
            {generateList(items)}
        </ol>
    );
};
