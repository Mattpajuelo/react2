import React from 'react';
import Genres from './contenidogenres';

let data = ["Acción", 'dramaturgy', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']
const Genresindb = () => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        { data.map( (info, i) =>(<Genres key={info + i} genre={info}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Genresindb;