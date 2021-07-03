import React from 'react';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-akar-icons/arrow-right';


function ItemLegenda(props) {
    return (
      <div className="row pb-4">
        <div className="col-2 d-flex justify-content-end">
          <img
            src={props.icon[props.name]}
            alt={props.desc}
          >
          </img>
        </div>
        <div className="col-2">
          <Icon
            icon={arrowRight}
            style={{ fontSize: "31px", color: "#FFC107" }}
          />
        </div>
        <div className="col-8">
          <h3 class="sf-pro-d-bold f-s-25">{props.desc}</h3>
        </div>
      </div>
    );
}


export default ItemLegenda;