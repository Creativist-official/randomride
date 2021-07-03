import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import arrowRight from '@iconify/icons-akar-icons/arrow-right';
import "../css/Legenda.css";

function ItemLegenda(props) {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <Icon icon={arrowRight} style={{ fontSize: "31px" }} />
        </div>
        <div className="col-6">
          <h3 class="sf-pro-d-bold f-s-25">{props.desc}</h3>
        </div>
      </div>
    );
}


export default ItemLegenda;