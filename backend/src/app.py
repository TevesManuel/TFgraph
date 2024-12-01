import matplotlib.pyplot as plt
from scipy import signal
import numpy as np

numerador = [10]
denominador = [1, 2.5, 1]

sistema = signal.TransferFunction(numerador, denominador)

viewSize = 10

resolution = viewSize*2*1000

scope = np.logspace(-viewSize, viewSize, num=resolution)

freqs, gain, phase = signal.bode(sistema, scope)

min_diff_index = np.argmin(np.abs(gain))  # Índice de la ganancia más cercana a 0 dB
min_diff_gain = gain[min_diff_index]      # Valor de la ganancia mínima
min_diff_freq = phase[min_diff_index]     # Frecuencia correspondiente

print("Ganancia más cercana a 0 dB:", min_diff_gain, "dB")
print("Frecuencia correspondiente:", min_diff_freq, "Hz")

if(abs(min_diff_freq) < 179.9):
    print("El sistema es estable")
else:
    print("El sistema es inestable")

plt.figure(figsize=(10, 6))
plt.subplot(2, 1, 1)
plt.semilogx(freqs, gain)
plt.title("Diagram of Bode")
plt.ylabel("gain (dB)")
plt.grid(which="both", linestyle="--", linewidth=0.5)

plt.subplot(2, 1, 2)
plt.semilogx(freqs, phase)
plt.ylabel("Phase (degrees)")
plt.xlabel("Frecuency (Hz)")
plt.grid(which="both", linestyle="--", linewidth=0.5)

plt.tight_layout()
plt.show()

w, h = signal.freqresp(sistema, scope)

# Graficar el diagrama de Nyquist (parte real vs. parte imaginaria)
plt.figure(figsize=(8, 6))
plt.plot(np.real(h), np.imag(h), label="Nyquist")
plt.plot(np.real(h), -np.imag(h), '--', label="Reflejo de Nyquist")  # Reflejo para ver estabilidad
plt.title("Diagrama de Nyquist")
plt.xlabel("Parte Real")
plt.ylabel("Parte Imaginaria")
plt.grid(True)
plt.legend()
plt.show()