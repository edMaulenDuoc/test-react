import React, { useState } from 'react';

/**
 * 🧑‍🍳 COMPONENTE (El Platillo)
 * Este es un contador simple. Tiene lógica de negocio (no bajar de 0)
 * que necesitamos probar para asegurarnos de que funciona bien.
 */
const Contador = () => {
    const [cuenta, setCuenta] = useState(0);
    const prueba = 12;

    const incrementar = () => setCuenta(c => c + 1);
    const decrementar = () => {
        // Regla de negocio: No permitimos números negativos
        if (cuenta > 0) {
            setCuenta(c => c - 1);
        }
    };
    const resetear = () => setCuenta(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-sans">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
                <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
                    Contador Seguro
                </h1>
                <p className="text-center text-slate-500 mb-8 text-sm">
                    Este componente está listo para ser testead con Jest.
                </p>

                <div className="flex items-center justify-center mb-8">
                    <span
                        data-testid="valor-cuenta"
                        className={`text-6xl font-black ${cuenta === 0 ? 'text-slate-300' : 'text-indigo-600'}`}
                    >
                        {cuenta}
                    </span>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={decrementar}
                        aria-label="restar"
                        className="p-4 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors active:scale-95 disabled:opacity-50"
                        disabled={cuenta === 0}
                    >
                        -
                    </button>

                    <button
                        onClick={resetear}
                        aria-label="resetear"
                        className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95"
                    >
                        Reiniciar
                    </button>

                    <button
                        onClick={incrementar}
                        aria-label="sumar"
                        className="p-4 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors active:scale-95"
                    >
                        +
                    </button>
                </div>

                <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-blue-800 mb-2 text-sm">🧪 Cómo testear esto:</h3>
                    <p className="text-blue-700 text-xs leading-relaxed">
                        Abajo en el código fuente encontrarás el bloque comentado con el test
                        que deberías copiar en un archivo <code>Contador.test.jsx</code>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contador;