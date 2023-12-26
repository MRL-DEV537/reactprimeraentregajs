import React from 'react'

const ItemDetail = ( {item} ) => {
  return (
    <div className='container'>
        <div className='producto-detalle'>
            <img src={item.imagen} alt={item.titulo} />
        </div>
        <div>
            <h3 className='titulo'>{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoria: {item.categoria}</p>
            <p className="precio">Precio: $ {item.precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail
