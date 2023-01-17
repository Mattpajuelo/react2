import React from 'react';

function Movie(){
    return(
        <React.Fragment>
				   
					<h1 className="h3 mb-2 text-gray-800">peliculas</h1>
					
					
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Generos</th>
                                            <th>Duración</th>
                                            <th>Premios</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>Reto al destino</td>
											<td>5</td>
                                            <td><ul><li>Drama</li><li>Tragedia</li></ul></td>
											<td>120</td>
                                            <td>15</td>
										</tr>
										<tr>
											<td>02</td>
											<td>La caida del halcon negro</td>
											<td>10</td>
                                            <td><ul><li>Drama</li><li>Tragedia</li></ul></td>
											<td>240</td>
                                            <td>18</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;