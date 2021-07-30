import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { primerMayuscula } from '../helpers/helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    // extraer datos
    const { brand, year, plan } = datos;

    if ( brand === '' || year === '' || plan === '' ) return null;

    return (
        <ContenedorResumen>
            <h2> Resumen de cotización </h2>
            <ul>
                <li>Brand: { primerMayuscula( brand ) } </li>
                <li>Car Year: { year } </li>
                <li>Plan: { primerMayuscula( plan ) } </li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;