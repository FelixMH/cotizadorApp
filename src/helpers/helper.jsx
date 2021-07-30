// obtiene la diferencia de años.
export function getYearDiff( year ) {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar según la marca.
export function calculateBrand( brand ) {
    let increment;

    switch( brand ) {

        case 'europeo': 
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            break;
    }

    return increment;
}

// calcula el tipo de seguro.
export function getPlan( plan ) {
    return ( plan === 'basico' ) ? 1.20 : 1.50;
}

// Muestra primer letra mayuscula
export function primerMayuscula( txt ) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}