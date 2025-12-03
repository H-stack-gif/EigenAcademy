# PARTIAL DIFFERENTIAL EQUATIONS MOCK EXAM

## SECTION I: Multiple Choice (25 Questions)

**Directions:** Select the best answer for each question.

---

**Question 1:** The PDE $u_{tt} = c^2 u_{xx}$ is classified as:

A) Parabolic  
B) Hyperbolic  
C) Elliptic  
D) First-order  
E) Quasilinear

---

**Question 2:** Which condition is NOT required for a problem to be well-posed according to Hadamard?

A) A solution exists  
B) The solution is unique  
C) The solution depends continuously on initial/boundary data  
D) The solution is differentiable  
E) All of the above are required

---

**Question 3:** The method of characteristics for $u_t + 2u_x = 0$ with $u(x,0) = \sin(x)$ gives:

A) $u(x,t) = \sin(x + 2t)$  
B) $u(x,t) = \sin(x - 2t)$  
C) $u(x,t) = e^{-2t}\sin(x)$  
D) $u(x,t) = \sin(x)\cos(2t)$  
E) $u(x,t) = 2t\sin(x)$

---

**Question 4:** For the PDE $Au_{xx} + Bu_{xy} + Cu_{yy} = 0$, the discriminant $\Delta = B^2 - 4AC = -16$. This PDE is:

A) Parabolic  
B) Hyperbolic  
C) Elliptic  
D) Cannot be determined  
E) First-order

---

**Question 5:** The Fourier series coefficient $a_n$ for $f(x)$ on $[-L, L]$ is computed as:

A) $\frac{1}{L}\int_{-L}^{L} f(x)\cos(n\pi x/L) dx$  
B) $\frac{2}{L}\int_{-L}^{L} f(x)\cos(n\pi x/L) dx$  
C) $\frac{1}{\pi}\int_{-L}^{L} f(x)\cos(nx) dx$  
D) $\int_{-L}^{L} f(x)\sin(n\pi x/L) dx$  
E) $\frac{1}{2L}\int_{-L}^{L} f(x) dx$

---

**Question 6:** The Gibbs phenomenon for Fourier series causes an overshoot of approximately:

A) 5% at discontinuities  
B) 9% at discontinuities  
C) 15% at discontinuities  
D) 25% at discontinuities  
E) No overshoot occurs

---

**Question 7:** For Dirichlet boundary conditions $u(0,t) = u(L,t) = 0$, the appropriate eigenfunction expansion uses:

A) $\cos(n\pi x/L)$  
B) $\sin(n\pi x/L)$  
C) $e^{in\pi x/L}$  
D) $x^n$  
E) Chebyshev polynomials

---

**Question 8:** The heat equation $u_t = ku_{xx}$ with separation of variables $u(x,t) = X(x)T(t)$ leads to:

A) $\frac{T'}{kT} = \frac{X''}{X} = \lambda$ (constant)  
B) $T' + kX'' = 0$  
C) $\frac{T}{T'} = \frac{X}{X'}$  
D) $T'' = kX$  
E) $TX = $ constant

---

**Question 9:** The maximum principle for the heat equation states that the maximum of $u$ occurs:

A) In the interior of the domain  
B) At $t = 0$ or on the spatial boundary  
C) At $t = \infty$  
D) Uniformly throughout the domain  
E) At points where $u_{xx} = 0$

---

**Question 10:** The fundamental solution (heat kernel) to $u_t = ku_{xx}$ on $\mathbb{R}$ is:

A) $e^{-kx^2/t}$  
B) $\frac{1}{\sqrt{4\pi kt}}e^{-x^2/(4kt)}$  
C) $\frac{1}{2\pi kt}e^{-x^2/kt}$  
D) $\delta(x-kt)$  
E) $\frac{1}{kt}e^{-x/t}$

---

**Question 11:** D'Alembert's solution to $u_{tt} = c^2u_{xx}$ with $u(x,0) = f(x)$ and $u_t(x,0) = g(x)$ is:

A) $u = f(x+ct) + f(x-ct)$  
B) $u = \frac{1}{2}[f(x+ct) + f(x-ct)]$  
C) $u = \frac{1}{2}[f(x+ct) + f(x-ct)] + \frac{1}{2c}\int_{x-ct}^{x+ct} g(\xi)d\xi$  
D) $u = f(x)\cos(ct) + g(x)\sin(ct)$  
E) $u = e^{ct}f(x)$

---

**Question 12:** The total energy $E = \frac{1}{2}\int [u_t^2 + c^2u_x^2] dx$ for the wave equation:

A) Increases linearly with time  
B) Decreases exponentially  
C) Is conserved (constant)  
D) Oscillates periodically  
E) Approaches infinity as $t \to \infty$

---

**Question 13:** The domain of dependence for the wave equation $u_{tt} = c^2u_{xx}$ at point $(x_0, t_0)$ consists of:

A) All points in the spatial domain  
B) The interval $[x_0 - ct_0, x_0 + ct_0]$ on the initial line  
C) Only the point $x_0$  
D) The entire half-plane $t < t_0$  
E) The point $(x_0, 0)$ only

---

**Question 14:** Laplace's equation $\nabla^2 u = 0$ is classified as:

A) Parabolic  
B) Hyperbolic  
C) Elliptic  
D) Quasilinear  
E) First-order

---

**Question 15:** Harmonic functions (solutions to Laplace's equation) satisfy:

A) Maximum principle: max/min occur on boundary  
B) Mean value property: $u(x_0)$ equals average over sphere  
C) Infinitely differentiable in the interior  
D) All of the above  
E) None of the above

---

**Question 16:** In polar coordinates $(r,\theta)$, Laplace's equation becomes:

A) $u_{rr} + u_{\theta\theta} = 0$  
B) $u_{rr} + \frac{1}{r}u_r + \frac{1}{r^2}u_{\theta\theta} = 0$  
C) $\frac{1}{r}\frac{\partial}{\partial r}(ru_r) + u_{\theta\theta} = 0$  
D) $u_r + \frac{1}{r}u_\theta = 0$  
E) Both B and C

---

**Question 17:** The Fourier transform of $f'(x)$ is:

A) $\hat{f}'(\omega)$  
B) $i\omega \hat{f}(\omega)$  
C) $-i\omega \hat{f}(\omega)$  
D) $\omega^2 \hat{f}(\omega)$  
E) $\int \hat{f}(\omega) d\omega$

---

**Question 18:** The convolution theorem for Fourier transforms states that $\mathcal{F}\{f * g\}$ equals:

A) $\hat{f}(\omega) + \hat{g}(\omega)$  
B) $\hat{f}(\omega) - \hat{g}(\omega)$  
C) $\hat{f}(\omega) \cdot \hat{g}(\omega)$  
D) $\hat{f}(\omega) / \hat{g}(\omega)$  
E) $\hat{f}(\omega) * \hat{g}(\omega)$

---

**Question 19:** The Laplace transform $\mathcal{L}\{f'(t)\}$ equals:

A) $F'(s)$  
B) $sF(s) - f(0)$  
C) $F(s)/s$  
D) $s^2F(s) - sf(0) - f'(0)$  
E) $-f(0)$

---

**Question 20:** For the heat equation on infinite domain, taking Fourier transform in $x$ gives $\hat{u}_t = ?$

A) $k\hat{u}_{xx}$  
B) $-k\omega^2\hat{u}$  
C) $ik\omega\hat{u}$  
D) $k\hat{u}$  
E) $-k|\omega|\hat{u}$

---

**Question 21:** The standard Sturm-Liouville equation is:

A) $y'' + \lambda y = 0$  
B) $(py')' + (q + \lambda w)y = 0$  
C) $py'' + qy' + ry = 0$  
D) $y''' + \lambda y = 0$  
E) $\nabla^2 y + \lambda y = 0$

---

**Question 22:** Eigenfunctions of a Sturm-Liouville problem are orthogonal with respect to:

A) Standard inner product $\int y_m y_n dx$  
B) Weighted inner product $\int w(x) y_m(x) y_n(x) dx$  
C) $L^2$ norm only  
D) Supremum norm  
E) No inner product

---

**Question 23:** The $n$-th eigenfunction of a regular Sturm-Liouville problem on $(a,b)$ has:

A) Exactly $n$ zeros in $(a,b)$  
B) Exactly $n-1$ zeros in $(a,b)$  
C) At most $n$ zeros  
D) No zeros  
E) Infinitely many zeros

---

**Question 24:** Green's function $G(x,\xi)$ for differential operator $L$ satisfies:

A) $LG(x,\xi) = 0$  
B) $LG(x,\xi) = 1$  
C) $LG(x,\xi) = \delta(x-\xi)$  
D) $LG(x,\xi) = x - \xi$  
E) $G(x,\xi) = 0$ for all $x,\xi$

---

**Question 25:** For the 3D wave equation, the fundamental solution exhibits:

A) Dispersion (wave spreading)  
B) Sharp wavefront with no tail (Huygens' principle)  
C) Exponential decay  
D) Diffusive tail  
E) Constant amplitude

---

## SECTION II: Free Response (3 Questions)

### Free Response Question 1

Consider the PDE:
$$u_t + uu_x = 0$$
with initial condition $u(x,0) = \begin{cases} 1 & x < 0 \\ 0 & x > 0 \end{cases}$

**(a)** Classify this PDE (linear, quasilinear, or fully nonlinear).

**(b)** Write the characteristic equations for this PDE.

**(c)** Solve for the characteristics starting from $x < 0$ and from $x > 0$.

**(d)** At what time $t_s$ do the characteristics first intersect (shock formation)? At what location $x_s$ does this occur?

**(e)** Sketch the characteristic diagram in the $x$-$t$ plane, clearly indicating where the shock forms.

---

### Free Response Question 2

A thin rod of length $L = \pi$ has its ends held at zero temperature. The initial temperature distribution is $u(x,0) = \sin(x) + 2\sin(3x)$. The heat equation is:
$$u_t = ku_{xx}, \quad 0 < x < \pi, \quad t > 0$$
with boundary conditions $u(0,t) = u(\pi,t) = 0$.

**(a)** Using separation of variables with $u(x,t) = X(x)T(t)$, derive the separated ODEs for $X$ and $T$.

**(b)** Solve the eigenvalue problem for $X(x)$ with the given boundary conditions. Find the eigenvalues $\lambda_n$ and eigenfunctions $X_n(x)$.

**(c)** For each eigenvalue $\lambda_n$, solve the time equation for $T_n(t)$.

**(d)** Write the general solution as a series and match it to the initial condition to find the specific solution.

**(e)** Describe what happens to the solution as $t \to \infty$. Which term dominates, and why?

---

### Free Response Question 3

Consider Laplace's equation on the upper half-plane ($y > 0$):
$$u_{xx} + u_{yy} = 0, \quad -\infty < x < \infty, \quad y > 0$$
with boundary condition $u(x,0) = f(x)$ where $f(x) = e^{-|x|}$.

**(a)** Take the Fourier transform in $x$ (denoting $\hat{u}(\omega, y) = \mathcal{F}_x\{u(x,y)\}$). Show that $\hat{u}$ satisfies an ODE in $y$. Write this ODE.

**(b)** Solve the ODE from part (a), using the condition that $u$ remains bounded as $y \to \infty$.

**(c)** Compute the Fourier transform $\hat{f}(\omega)$ of the boundary data $f(x) = e^{-|x|}$.

**(d)** Use the boundary condition $\hat{u}(\omega,0) = \hat{f}(\omega)$ to determine the solution $\hat{u}(\omega, y)$ in Fourier space.

**(e)** Write the inverse Fourier transform that would give $u(x,y)$. (You do not need to evaluate the integral.)

---
---

# PARTIAL DIFFERENTIAL EQUATIONS ANSWER KEY

## Multiple Choice Solutions

**1. B** - The wave equation $u_{tt} = c^2u_{xx}$ is the standard hyperbolic PDE. In general form $Au_{tt} + Bu_{tx} + Cu_{xx} = 0$, we have $A = 1$, $B = 0$, $C = -c^2$. The discriminant is $\Delta = B^2 - 4AC = 0 - 4(1)(-c^2) = 4c^2 > 0$, confirming hyperbolic classification. This describes wave propagation in one dimension.

**2. D** - Hadamard's three criteria for well-posedness are: (1) existence of a solution, (2) uniqueness of the solution, and (3) continuous dependence on initial/boundary data. Differentiability is a property of the solution but not a requirement for well-posedness. A well-posed problem can have solutions that are continuous but not differentiable everywhere (e.g., weak solutions).

**3. B** - For $u_t + 2u_x = 0$, the characteristics are $\frac{dx}{dt} = 2$, giving $x = 2t + x_0$. Along characteristics, $u$ is constant, so $u(x,t) = u(x_0, 0) = \sin(x_0) = \sin(x - 2t)$. This is a traveling wave moving to the right at speed 2.

**4. C** - The discriminant $\Delta = B^2 - 4AC = -16 < 0$ indicates an elliptic PDE. Elliptic PDEs (like Laplace's equation) typically describe steady-state phenomena with no preferred direction of propagation. They have complex characteristics and solutions that depend on all boundary data.

**5. A** - The Fourier cosine coefficient is computed by multiplying $f(x)$ by $\cos(n\pi x/L)$ and integrating over $[-L,L]$, then dividing by the squared norm. For cosine functions: $\int_{-L}^{L}\cos^2(n\pi x/L)dx = L$ for $n \geq 1$, so $a_n = \frac{1}{L}\int_{-L}^{L} f(x)\cos(n\pi x/L)dx$. Note that $a_0$ has an extra factor of 2 in the denominator.

**6. B** - The Gibbs phenomenon causes Fourier series approximations to overshoot at jump discontinuities by approximately 9% (more precisely, $(2/\pi)\int_0^{\pi}\sin(t)/t \, dt - 1 \approx 0.089$ or 8.9%). This overshoot persists even as more terms are added; only its width shrinks. It's a fundamental property of Fourier series approximation of discontinuous functions.

**7. B** - Dirichlet boundary conditions $u(0,t) = u(L,t) = 0$ are satisfied by eigenfunctions that vanish at both endpoints. The functions $\sin(n\pi x/L)$ satisfy $\sin(0) = \sin(n\pi) = 0$ for all integers $n \geq 1$. Cosine functions satisfy $\cos(0) = 1 \neq 0$, so they don't work for Dirichlet conditions.

**8. A** - Substituting $u = XT$ into $u_t = ku_{xx}$ gives $XT' = kX''T$. Dividing both sides by $kXT$: $\frac{T'}{kT} = \frac{X''}{X}$. The left side depends only on $t$, the right only on $x$, so both must equal a constant, which we call $\lambda$ (the separation constant).

**9. B** - The maximum principle for the heat equation states that the maximum value of temperature occurs either at the initial time or on the spatial boundary, never in the interior for $t > 0$. This reflects the physical fact that heat diffuses away from hot spots, so interior points cannot be hotter than boundary/initial values.

**10. B** - The heat kernel (fundamental solution) is derived by taking the Fourier transform of the heat equation. It's a Gaussian that spreads in time with variance $\sigma^2(t) = 2kt$. The normalization factor $\frac{1}{\sqrt{4\pi kt}}$ ensures $\int_{-\infty}^{\infty} G(x,t)dx = 1$ (conservation of heat). This is the Green's function for an instantaneous point source at the origin.

**11. C** - D'Alembert's formula decomposes the solution into left-traveling and right-traveling waves. The first term handles initial displacement $f(x)$, appearing as waves traveling in both directions. The integral term handles initial velocity $g(x)$, integrating over the domain of dependence. This is the general solution for the 1D wave equation.

**12. C** - The total energy $E = \frac{1}{2}\int[u_t^2 + c^2u_x^2]dx$ (kinetic + potential) is conserved for the wave equation with no damping or forcing. Taking the time derivative: $\frac{dE}{dt} = \int[u_tu_{tt} + c^2u_xu_{xt}]dx = \int u_t(u_{tt} - c^2u_{xx})dx = 0$ by the wave equation. This reflects conservation of energy in wave propagation.

**13. B** - For the wave equation with finite propagation speed $c$, information can only reach point $(x_0, t_0)$ from initial points within distance $ct_0$. This is the domain of dependence: the interval $[x_0 - ct_0, x_0 + ct_0]$ at $t=0$. Points outside this interval cannot influence the solution at $(x_0, t_0)$.

**14. C** - Laplace's equation $u_{xx} + u_{yy} = 0$ (or $\nabla^2 u = 0$ in higher dimensions) is the prototypical elliptic PDE. With $A=1$, $B=0$, $C=1$, the discriminant is $\Delta = 0 - 4 = -4 < 0$. Elliptic PDEs describe equilibrium phenomena (steady-state temperature, electrostatic potential) with no time evolution.

**15. D** - Harmonic functions have remarkable properties: (1) Maximum principle—extrema occur on boundaries, not in the interior; (2) Mean value property—the value at any point equals the average over any sphere centered at that point; (3) Infinite differentiability—harmonic functions are $C^\infty$ in their domain. These properties make Laplace's equation special among PDEs.

**16. E** - Both forms are correct. Form B writes out all terms explicitly: $u_{rr} + \frac{1}{r}u_r + \frac{1}{r^2}u_{\theta\theta} = 0$. Form C uses the identity $\frac{1}{r}\frac{\partial}{\partial r}(ru_r) = u_{rr} + \frac{1}{r}u_r$, giving the more compact expression. Both are equivalent and commonly used.

**17. B** - This is the crucial derivative property: $\mathcal{F}\{f'(x)\} = i\omega\hat{f}(\omega)$. Proof: $\mathcal{F}\{f'\} = \int f'(x)e^{-i\omega x}dx = [fe^{-i\omega x}]_{-\infty}^{\infty} + i\omega\int fe^{-i\omega x}dx = i\omega\hat{f}$ (assuming $f \to 0$ as $|x| \to \infty$). This converts differentiation to multiplication, which is why Fourier transforms are so useful for PDEs.

**18. C** - The convolution theorem states that convolution in the spatial domain corresponds to multiplication in the frequency domain: $\mathcal{F}\{f * g\} = \hat{f}(\omega) \cdot \hat{g}(\omega)$. Conversely, $\mathcal{F}\{f \cdot g\} = \frac{1}{2\pi}\hat{f} * \hat{g}$. This theorem is fundamental in signal processing and solving PDEs with Green's functions.

**19. B** - The Laplace transform of the derivative automatically incorporates the initial condition: $\mathcal{L}\{f'(t)\} = \int_0^{\infty} f'(t)e^{-st}dt = [fe^{-st}]_0^{\infty} + s\int_0^{\infty} fe^{-st}dt = -f(0) + sF(s)$. This is why Laplace transforms are so powerful for initial value problems—initial conditions are built into the transformed equation.

**20. B** - Taking the Fourier transform of $u_t = ku_{xx}$: $\hat{u}_t = k\mathcal{F}\{u_{xx}\} = k(i\omega)^2\hat{u} = -k\omega^2\hat{u}$. This converts the PDE to an ODE in time: $\hat{u}_t = -k\omega^2\hat{u}$, which has solution $\hat{u}(\omega,t) = \hat{u}(\omega,0)e^{-k\omega^2 t}$. Each frequency mode decays exponentially with rate proportional to $\omega^2$.

**21. B** - The standard Sturm-Liouville form is $\frac{d}{dx}[p(x)\frac{dy}{dx}] + [q(x) + \lambda w(x)]y = 0$ with $p(x) > 0$ and $w(x) > 0$ (weight function). This encompasses many important ODEs: choose appropriate $p$, $q$, $w$ to get Bessel's equation, Legendre's equation, etc. The eigenvalue parameter $\lambda$ leads to orthogonal eigenfunctions.

**22. B** - Eigenfunctions are orthogonal with respect to the weighted inner product $\langle y_m, y_n \rangle = \int_a^b w(x)y_m(x)y_n(x)dx = 0$ for $m \neq n$. The weight function $w(x)$ comes from the Sturm-Liouville equation itself. Different problems have different weights: $w=1$ for standard problems, $w=x$ for Bessel, $w=1/\sqrt{1-x^2}$ for Chebyshev.

**23. B** - The oscillation theorem states that the $n$-th eigenfunction (corresponding to the $n$-th smallest eigenvalue) has exactly $n-1$ zeros in the open interval $(a,b)$. For example, $\sin(n\pi x/L)$ on $(0,L)$ has $n-1$ zeros at $x = kL/n$ for $k=1,2,\ldots,n-1$. Higher eigenfunctions oscillate more rapidly.

**24. C** - The Green's function is the response to a point source (delta function): $LG(x,\xi) = \delta(x-\xi)$ where $L$ is the differential operator. Once $G$ is known, the solution to $Ly = f$ is given by $y(x) = \int G(x,\xi)f(\xi)d\xi$. This converts the differential equation into an integral equation.

**25. B** - In 3D, the wave equation fundamental solution is $G(\vec{x},t;\vec{\xi},\tau) = \frac{\delta(t - \tau - |\vec{x}-\vec{\xi}|/c)}{4\pi|\vec{x}-\vec{\xi}|}$. The delta function means the disturbance arrives exactly at time $\tau + r/c$ with no trailing wake—this is Huygens' principle. It holds in odd spatial dimensions (1D, 3D) but not even dimensions (2D has a diffuse tail).

---

## Free Response Solutions

### FRQ 1 Solutions

**(a)** Classification:

This PDE is **quasilinear**. It is linear in the highest derivatives ($u_t$ and $u_x$ are first-order), but the coefficient of $u_x$ is $u$ itself (the unknown function), making it nonlinear overall. It is not fully nonlinear because it doesn't involve products of derivatives like $u_x u_t$ or nonlinear functions of derivatives like $(u_x)^2$.

**(b)** Characteristic equations:

For the PDE $u_t + uu_x = 0$, we use the method of characteristics. The characteristic equations are:
$$\frac{dt}{1} = \frac{dx}{u} = \frac{du}{0}$$

This gives us two ODEs:
$$\frac{dx}{dt} = u$$
$$\frac{du}{dt} = 0$$

**(c)** Solving characteristics:

From $\frac{du}{dt} = 0$, we have $u = \text{constant}$ along each characteristic.

**For $x_0 < 0$:** Initial condition gives $u(x_0, 0) = 1$
- Along characteristic: $u = 1$ (constant)
- From $\frac{dx}{dt} = u = 1$: $x = t + x_0$
- Characteristics: $x = t + x_0$ where $x_0 < 0$

**For $x_0 > 0$:** Initial condition gives $u(x_0, 0) = 0$
- Along characteristic: $u = 0$ (constant)
- From $\frac{dx}{dt} = u = 0$: $x = x_0$
- Characteristics: $x = x_0$ (vertical lines) where $x_0 > 0$

**(d)** Shock formation time and location:

Characteristics from the left ($x_0 < 0$) have slope 1 and are given by $x = t + x_0$.
Characteristics from the right ($x_0 > 0$) are vertical lines $x = x_0$.

For a characteristic starting at $x_0 < 0$: $x = t + x_0$
For a characteristic starting at $x_0 > 0$: $x = x_0$

The leftmost characteristic from $x_0 < 0$ is the one approaching $x_0 = 0^-$: $x = t + 0^- = t$
The rightmost characteristic from $x_0 > 0$ is the one at $x_0 = 0^+$: $x = 0^+$

These intersect when $t = 0$ at $x = 0$.

Therefore: **$t_s = 0$, $x_s = 0$**

The shock forms immediately at $t=0$ at the origin, which makes sense because we have a discontinuity in the initial data.

**(e)** Characteristic diagram sketch:

[In an actual solution, include a sketch showing:
- The $x$-axis (horizontal) and $t$-axis (vertical)
- Characteristics with slope 1 emanating from $x < 0$ (lines going up and to the right)
- Vertical characteristics from $x > 0$ (lines going straight up)
- A point at the origin $(0,0)$ marked as the shock formation point
- Label regions: "$u=1$" on the left, "$u=0$" on the right
- A vertical dashed line at $x=0$ indicating the shock path]

### FRQ 2 Solutions

**(a)** Separated ODEs:

Substitute $u(x,t) = X(x)T(t)$ into $u_t = ku_{xx}$:
$$X(x)T'(t) = kX''(x)T(t)$$

Dividing both sides by $kX(x)T(t)$:
$$\frac{T'(t)}{kT(t)} = \frac{X''(x)}{X(x)}$$

Since the left side depends only on $t$ and the right side depends only on $x$, both must equal a constant. Call this constant $-\lambda$ (the negative sign is conventional):

$$\frac{T'(t)}{kT(t)} = \frac{X''(x)}{X(x)} = -\lambda$$

This gives two ODEs:
$$X''(x) + \lambda X(x) = 0$$
$$T'(t) + k\lambda T(t) = 0$$

**(b)** Eigenvalue problem solution:

The spatial ODE is $X'' + \lambda X = 0$ with boundary conditions $X(0) = X(\pi) = 0$.

For $\lambda > 0$: General solution is $X(x) = A\cos(\sqrt{\lambda}x) + B\sin(\sqrt{\lambda}x)$

Applying $X(0) = 0$: $A = 0$, so $X(x) = B\sin(\sqrt{\lambda}x)$

Applying $X(\pi) = 0$: $B\sin(\sqrt{\lambda}\pi) = 0$

For nontrivial solution ($B \neq 0$): $\sin(\sqrt{\lambda}\pi) = 0$
This requires $\sqrt{\lambda}\pi = n\pi$ for $n = 1, 2, 3, \ldots$

Therefore:
- **Eigenvalues:** $\lambda_n = n^2$ for $n = 1, 2, 3, \ldots$
- **Eigenfunctions:** $X_n(x) = \sin(nx)$

**(c)** Time equation solution:

For each eigenvalue $\lambda_n = n^2$, the time equation is:
$$T'(t) + kn^2 T(t) = 0$$

This is a first-order linear ODE with solution:
$$T_n(t) = C_n e^{-kn^2t}$$

**(d)** General solution and matching initial condition:

The general solution is:
$$u(x,t) = \sum_{n=1}^{\infty} B_n e^{-kn^2t}\sin(nx)$$

Applying initial condition $u(x,0) = \sin(x) + 2\sin(3x)$:
$$\sum_{n=1}^{\infty} B_n \sin(nx) = \sin(x) + 2\sin(3x)$$

By orthogonality of $\{\sin(nx)\}$, we match coefficients:
- $B_1 = 1$ (coefficient of $\sin(x)$)
- $B_3 = 2$ (coefficient of $\sin(3x)$)
- $B_n = 0$ for all other $n$

**Final solution:**
$$u(x,t) = e^{-kt}\sin(x) + 2e^{-9kt}\sin(3x)$$

**(e)** Long-time behavior:

As $t \to \infty$:
- The term $e^{-kt}\sin(x)$ decays at rate $e^{-kt}$
- The term $2e^{-9kt}\sin(3x)$ decays at rate $e^{-9kt}$

Since $9k > k$, the second term decays much faster than the first. Therefore:

**The first term dominates for large $t$:** $u(x,t) \approx e^{-kt}\sin(x)$ as $t \to \infty$

**Why:** Higher frequency modes (larger $n$) decay exponentially faster because the decay rate is proportional to $n^2$. The slowest-decaying mode (fundamental mode, $n=1$) dominates the long-time behavior. Eventually, all modes decay to zero as $t \to \infty$, representing the rod cooling to the ambient temperature (zero).

### FRQ 3 Solutions

**(a)** Fourier transform ODE:

Taking the Fourier transform in $x$:
$$\mathcal{F}_x\{u_{xx}\} + \mathcal{F}_x\{u_{yy}\} = 0$$

Using the derivative property $\mathcal{F}_x\{u_{xx}\} = (i\omega)^2\hat{u} = -\omega^2\hat{u}$:
$$-\omega^2\hat{u}(\omega,y) + \frac{\partial^2\hat{u}}{\partial y^2}(\omega,y) = 0$$

Rearranging:
$$\frac{\partial^2\hat{u}}{\partial y^2} - \omega^2\hat{u} = 0$$

or equivalently: $\hat{u}_{yy} - \omega^2\hat{u} = 0$

This is an ODE in $y$ (with $\omega$ as a parameter).

**(b)** Solving the ODE:

The ODE $\hat{u}_{yy} - \omega^2\hat{u} = 0$ has characteristic equation $r^2 - \omega^2 = 0$, giving $r = \pm\omega$.

However, we must be careful about the sign of $\omega$:
- If $\omega > 0$: solutions are $e^{\omega y}$ and $e^{-\omega y}$
- If $\omega < 0$: solutions are $e^{-|\omega| y}$ and $e^{|\omega| y}$

Since $u$ must remain bounded as $y \to \infty$, we need the decaying exponential:

**General solution:** $\hat{u}(\omega, y) = B(\omega)e^{-|\omega|y}$

where $B(\omega)$ is determined by the boundary condition.

**(c)** Fourier transform of boundary data:

$$\hat{f}(\omega) = \mathcal{F}\{e^{-|x|}\} = \int_{-\infty}^{\infty} e^{-|x|}e^{-i\omega x}dx$$

Split into two regions:
$$= \int_{-\infty}^{0} e^{x}e^{-i\omega x}dx + \int_{0}^{\infty} e^{-x}e^{-i\omega x}dx$$

$$= \int_{-\infty}^{0} e^{(1-i\omega)x}dx + \int_{0}^{\infty} e^{-(1+i\omega)x}dx$$

$$= \left[\frac{e^{(1-i\omega)x}}{1-i\omega}\right]_{-\infty}^{0} + \left[\frac{e^{-(1+i\omega)x}}{-(1+i\omega)}\right]_{0}^{\infty}$$

$$= \frac{1}{1-i\omega} + \frac{1}{1+i\omega}$$

$$= \frac{(1+i\omega) + (1-i\omega)}{(1-i\omega)(1+i\omega)} = \frac{2}{1+\omega^2}$$

Therefore: $\hat{f}(\omega) = \frac{2}{1+\omega^2}$

**(d)** Applying boundary condition:

From $\hat{u}(\omega,0) = \hat{f}(\omega)$:
$$B(\omega)e^{0} = \frac{2}{1+\omega^2}$$

$$B(\omega) = \frac{2}{1+\omega^2}$$

Therefore, the solution in Fourier space is:
$$\hat{u}(\omega, y) = \frac{2}{1+\omega^2}e^{-|\omega|y}$$

**(e)** Inverse Fourier transform expression:

The solution $u(x,y)$ is given by the inverse Fourier transform:
$$u(x,y) = \mathcal{F}^{-1}\{\hat{u}(\omega,y)\} = \frac{1}{2\pi}\int_{-\infty}^{\infty} \hat{u}(\omega,y)e^{i\omega x}d\omega$$

Substituting our result:
$$u(x,y) = \frac{1}{2\pi}\int_{-\infty}^{\infty} \frac{2e^{-|\omega|y}}{1+\omega^2}e^{i\omega x}d\omega$$

$$= \frac{1}{\pi}\int_{-\infty}^{\infty} \frac{e^{-|\omega|y}}{1+\omega^2}e^{i\omega x}d\omega$$

This integral can be evaluated using residue theory or tables of Fourier transforms, but the problem states we don't need to evaluate it.