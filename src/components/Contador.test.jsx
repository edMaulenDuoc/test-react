/*
====================================================================
📝 EL TEST (La Lista de Control)
Copia esto en un archivo llamado 'Contador.test.jsx'
====================================================================
*/
import { render, screen, fireEvent } from '@testing-library/react';
import Contador from './Contador'; // Asegúrate de importar el componente correcto
import '@testing-library/jest-dom';

describe('Pruebas del componente <Contador />', () => {
    test('debe mostrar el valor inicial de 0', () => {
        // 1. Arrange (Preparar)
        render(<Contador />);

        // 2. Act (No hay acción, solo lectura)
        const valorCuenta = screen.getByTestId('valor-cuenta');

        // 3. Assert (Afirmar)
        expect(valorCuenta).toHaveTextContent('0');
    });

    test('debe incrementar el valor al hacer click en sumar', () => {
        render(<Contador />);

        const botonSumar = screen.getByLabelText('sumar');
        const valorCuenta = screen.getByTestId('valor-cuenta');

        // Simular click
        fireEvent.click(botonSumar);

        expect(valorCuenta).toHaveTextContent('1');
    });

    test('no debe bajar de 0', () => {
        render(<Contador />);

        const botonRestar = screen.getByLabelText('restar');
        const valorCuenta = screen.getByTestId('valor-cuenta');

        // Intentamos restar cuando está en 0
        fireEvent.click(botonRestar);

        // Debería seguir en 0
        expect(valorCuenta).toHaveTextContent('0');
    });
});