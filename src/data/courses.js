export const courses = {
  analyticMath: {
    title: "Analytic Mathematics",
    color: "#FF6B6B",
    courses: [
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        subtitle: "Multivariable Calculus",
        badge: "1",
        units: [
          {
            id: "1",
            title: "Unit 1: First-Order Differential Equations",
            topics: [
              { id: "1.1", title: "1.1: Introduction and Direction Fields", description: "Introducing differential equations with graphical solution methods using direction fields and slope fields", contentPath: "/articles/odes/1_1.md" },
              { id: "1.2", title: "1.2: Separable Equations", description: "Solving first-order differential equations by separating variables and integrating both sides", contentPath: "/articles/odes/1_2.md" },
              { id: "1.3", title: "1.3: Linear First-Order Equations", description: "Solving linear first-order ODEs using integrating factors and analyzing their solutions", contentPath: "/articles/odes/1_3.md" },
              { id: "1.4", title: "1.4: Exact Equations and Substitutions", description: "Identifying and solving exact differential equations and using substitution methods for nonlinear equations", contentPath: "/articles/odes/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Second-Order Linear Differential Equations",
            topics: [
              { id: "2.1", title: "2.1: Homogeneous Equations with Constant Coefficients", description: "Solving homogeneous second-order linear ODEs using characteristic equations and exponential solutions", contentPath: "/articles/odes/2_1.md" },
              { id: "2.2", title: "2.2: Method of Undetermined Coefficients", description: "Finding particular solutions to nonhomogeneous equations by guessing solution forms based on forcing functions", contentPath: "/articles/odes/2_2.md" },
              { id: "2.3", title: "2.3: Variation of Parameters", description: "General method for finding particular solutions to nonhomogeneous linear ODEs using parameter variation", contentPath: "/articles/odes/2_3.md" },
              { id: "2.4", title: "2.4: Applications: Mechanical and Electrical Systems", description: "Modeling spring-mass systems, RLC circuits, and damped oscillations using second-order differential equations", contentPath: "/articles/odes/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Systems of Differential Equations",
            topics: [
              { id: "3.1", title: "3.1: Systems and Matrix Form", description: "Representing systems of first-order ODEs in matrix form and solving using eigenvalues and eigenvectors", contentPath: "/articles/odes/3_1.md" },
              { id: "3.2", title: "3.2: Phase Plane Analysis", description: "Visualizing solution trajectories in the phase plane and classifying equilibrium points of linear systems", contentPath: "/articles/odes/3_2.md" },
              { id: "3.3", title: "3.3: Nonlinear Systems and Linearization", description: "Analyzing nonlinear systems by linearizing near equilibrium points and studying stability behavior", contentPath: "/articles/odes/3_3.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Laplace Transforms",
            topics: [
              { id: "4.1", title: "4.1: Laplace Transform Definition and Properties", description: "Defining the Laplace transform and exploring linearity, shifting, and differentiation properties", contentPath: "/articles/odes/4_1.md" },
              { id: "4.2", title: "4.2: Inverse Laplace Transforms", description: "Computing inverse Laplace transforms using partial fractions and transform tables", contentPath: "/articles/odes/4_2.md" },
              { id: "4.3", title: "4.3: Solving IVPs with Laplace Transforms", description: "Applying Laplace transforms to solve initial value problems for linear differential equations", contentPath: "/articles/odes/4_3.md" },
              { id: "4.4", title: "4.4: Step Functions and Impulses", description: "Modeling discontinuous forcing functions using unit step functions and Dirac delta impulses", contentPath: "/articles/odes/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Series Solutions and Special Functions",
            topics: [
              { id: "5.1", title: "5.1: Power Series Solutions", description: "Finding series solutions to differential equations by assuming power series forms and matching coefficients", contentPath: "/articles/odes/5_1.md" },
              { id: "5.2", title: "5.2: Frobenius Method", description: "Extending power series methods to equations with singular points using the Frobenius technique", contentPath: "/articles/odes/5_2.md" },
              { id: "5.3", title: "5.3: Bessel and Legendre Equations", description: "Studying special functions arising from Bessel and Legendre differential equations in physics and engineering", contentPath: "/articles/odes/5_3.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Numerical Methods and Modeling",
            topics: [
              { id: "6.1", title: "6.1: Euler's Method", description: "Approximating solutions to differential equations numerically using simple Euler's method with error analysis", contentPath: "/articles/odes/6_1.md" },
              { id: "6.2", title: "6.2: Runge-Kutta Methods", description: "Higher-order numerical methods including RK2 and RK4 for improved accuracy in solving ODEs", contentPath: "/articles/odes/6_2.md" },
              { id: "6.3", title: "6.3: Mathematical Modeling", description: "Building and analyzing mathematical models for real-world phenomena using differential equations", contentPath: "/articles/odes/6_3.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "ODEs Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/odes.md" }
            ]
          }
        ]
      },
      {
        id: "odes",
        name: "Ordinary Differential Equations",
        subtitle: "Ordinary Differential Equations",
        badge: "2",
        units: [
          {
            id: "1",
            title: "Unit 1: First-Order Differential Equations",
            topics: [
              { id: "1.1", title: "1.1: Introduction and Direction Fields", description: "Introducing differential equations with graphical solution methods using direction fields and slope fields", contentPath: "/articles/odes/1_1.md" },
              { id: "1.2", title: "1.2: Separable Equations", description: "Solving first-order differential equations by separating variables and integrating both sides", contentPath: "/articles/odes/1_2.md" },
              { id: "1.3", title: "1.3: Linear First-Order Equations", description: "Solving linear first-order ODEs using integrating factors and analyzing their solutions", contentPath: "/articles/odes/1_3.md" },
              { id: "1.4", title: "1.4: Exact Equations and Substitutions", description: "Identifying and solving exact differential equations and using substitution methods for nonlinear equations", contentPath: "/articles/odes/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Second-Order Linear Differential Equations",
            topics: [
              { id: "2.1", title: "2.1: Homogeneous Equations with Constant Coefficients", description: "Solving homogeneous second-order linear ODEs using characteristic equations and exponential solutions", contentPath: "/articles/odes/2_1.md" },
              { id: "2.2", title: "2.2: Method of Undetermined Coefficients", description: "Finding particular solutions to nonhomogeneous equations by guessing solution forms based on forcing functions", contentPath: "/articles/odes/2_2.md" },
              { id: "2.3", title: "2.3: Variation of Parameters", description: "General method for finding particular solutions to nonhomogeneous linear ODEs using parameter variation", contentPath: "/articles/odes/2_3.md" },
              { id: "2.4", title: "2.4: Applications: Mechanical and Electrical Systems", description: "Modeling spring-mass systems, RLC circuits, and damped oscillations using second-order differential equations", contentPath: "/articles/odes/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Systems of Differential Equations",
            topics: [
              { id: "3.1", title: "3.1: Systems and Matrix Form", description: "Representing systems of first-order ODEs in matrix form and solving using eigenvalues and eigenvectors", contentPath: "/articles/odes/3_1.md" },
              { id: "3.2", title: "3.2: Phase Plane Analysis", description: "Visualizing solution trajectories in the phase plane and classifying equilibrium points of linear systems", contentPath: "/articles/odes/3_2.md" },
              { id: "3.3", title: "3.3: Nonlinear Systems and Linearization", description: "Analyzing nonlinear systems by linearizing near equilibrium points and studying stability behavior", contentPath: "/articles/odes/3_3.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Laplace Transforms",
            topics: [
              { id: "4.1", title: "4.1: Laplace Transform Definition and Properties", description: "Defining the Laplace transform and exploring linearity, shifting, and differentiation properties", contentPath: "/articles/odes/4_1.md" },
              { id: "4.2", title: "4.2: Inverse Laplace Transforms", description: "Computing inverse Laplace transforms using partial fractions and transform tables", contentPath: "/articles/odes/4_2.md" },
              { id: "4.3", title: "4.3: Solving IVPs with Laplace Transforms", description: "Applying Laplace transforms to solve initial value problems for linear differential equations", contentPath: "/articles/odes/4_3.md" },
              { id: "4.4", title: "4.4: Step Functions and Impulses", description: "Modeling discontinuous forcing functions using unit step functions and Dirac delta impulses", contentPath: "/articles/odes/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Series Solutions and Special Functions",
            topics: [
              { id: "5.1", title: "5.1: Power Series Solutions", description: "Finding series solutions to differential equations by assuming power series forms and matching coefficients", contentPath: "/articles/odes/5_1.md" },
              { id: "5.2", title: "5.2: Frobenius Method", description: "Extending power series methods to equations with singular points using the Frobenius technique", contentPath: "/articles/odes/5_2.md" },
              { id: "5.3", title: "5.3: Bessel and Legendre Equations", description: "Studying special functions arising from Bessel and Legendre differential equations in physics and engineering", contentPath: "/articles/odes/5_3.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Numerical Methods and Modeling",
            topics: [
              { id: "6.1", title: "6.1: Euler's Method", description: "Approximating solutions to differential equations numerically using simple Euler's method with error analysis", contentPath: "/articles/odes/6_1.md" },
              { id: "6.2", title: "6.2: Runge-Kutta Methods", description: "Higher-order numerical methods including RK2 and RK4 for improved accuracy in solving ODEs", contentPath: "/articles/odes/6_2.md" },
              { id: "6.3", title: "6.3: Mathematical Modeling", description: "Building and analyzing mathematical models for real-world phenomena using differential equations", contentPath: "/articles/odes/6_3.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "ODEs Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/odes.md" }
            ]
          }
        ]
      },
      {
        id: "complex-analysis",
        name: "Complex Analysis",
        subtitle: "Complex Analysis",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Complex Numbers and Elementary Functions",
            topics: [
              { id: "1.1", title: "1.1: The Complex Number System", description: "Algebra, geometry, polar form", contentPath: "/articles/complex-analysis/1_1.md" },
              { id: "1.2", title: "1.2: Complex Functions and Mappings", description: "Functions as transformations, limits, continuity", contentPath: "/articles/complex-analysis/1_2.md" },
              { id: "1.3", title: "1.3: Elementary Functions", description: "Exponential, trigonometric, hyperbolic, logarithm", contentPath: "/articles/complex-analysis/1_3.md" },
              { id: "1.4", title: "1.4: Branches and Riemann Surfaces", description: "Multivalued functions, branch points, branch cuts", contentPath: "/articles/complex-analysis/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Analytic Functions and Harmonic Functions",
            topics: [
              { id: "2.1", title: "2.1: Complex Differentiation", description: "Definition, rules, geometric interpretation", contentPath: "/articles/complex-analysis/2_1.md" },
              { id: "2.2", title: "2.2: Cauchy-Riemann Equations", description: "Necessary and sufficient conditions for analyticity", contentPath: "/articles/complex-analysis/2_2.md" },
              { id: "2.3", title: "2.3: Harmonic Functions", description: "Laplace's equation, harmonic conjugates", contentPath: "/articles/complex-analysis/2_3.md" },
              { id: "2.4", title: "2.4: Physical Interpretations", description: "Fluid flow, electrostatics, temperature", contentPath: "/articles/complex-analysis/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Complex Integration and Cauchy's Theorem",
            topics: [
              { id: "3.1", title: "3.1: Contour Integrals", description: "Line integrals in complex plane, path independence", contentPath: "/articles/complex-analysis/3_1.md" },
              { id: "3.2", title: "3.2: Cauchy's Theorem", description: "Fundamental theorem for analytic functions", contentPath: "/articles/complex-analysis/3_2.md" },
              { id: "3.3", title: "3.3: Cauchy's Integral Formula", description: "Representing analytic functions by contour integrals", contentPath: "/articles/complex-analysis/3_3.md" },
              { id: "3.4", title: "3.4: Consequences", description: "Morera's theorem, Cauchy's inequality, Liouville's theorem", contentPath: "/articles/complex-analysis/3_4.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Power Series and Laurent Series",
            topics: [
              { id: "4.1", title: "4.1: Power Series", description: "Convergence, radius of convergence, Abel's theorem", contentPath: "/articles/complex-analysis/4_1.md" },
              { id: "4.2", title: "4.2: Taylor Series", description: "Representing analytic functions, uniqueness", contentPath: "/articles/complex-analysis/4_2.md" },
              { id: "4.3", title: "4.3: Laurent Series", description: "Functions with isolated singularities", contentPath: "/articles/complex-analysis/4_3.md" },
              { id: "4.4", title: "4.4: Zeros and Singularities", description: "Classification and behavior", contentPath: "/articles/complex-analysis/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: The Residue Theorem and Applications",
            topics: [
              { id: "5.1", title: "5.1: Residues", description: "Definition, computation methods", contentPath: "/articles/complex-analysis/5_1.md" },
              { id: "5.2", title: "5.2: Residue Theorem", description: "Evaluating contour integrals", contentPath: "/articles/complex-analysis/5_2.md" },
              { id: "5.3", title: "5.3: Evaluation of Real Integrals", description: "Trigonometric, improper, and Fourier integrals", contentPath: "/articles/complex-analysis/5_3.md" },
              { id: "5.4", title: "5.4: Argument Principle and Rouché's Theorem", description: "Counting zeros and poles", contentPath: "/articles/complex-analysis/5_4.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Conformal Mapping and Applications",
            topics: [
              { id: "6.1", title: "6.1: Conformal Mappings", description: "Angle preservation, geometric properties", contentPath: "/articles/complex-analysis/6_1.md" },
              { id: "6.2", title: "6.2: Linear Fractional Transformations", description: "Möbius transformations, cross-ratio", contentPath: "/articles/complex-analysis/6_2.md" },
              { id: "6.3", title: "6.3: Special Mappings", description: "Exponential, logarithm, power functions", contentPath: "/articles/complex-analysis/6_3.md" },
              { id: "6.4", title: "6.4: Applications to Boundary Value Problems", description: "Dirichlet problem, fluid flow, electrostatics", contentPath: "/articles/complex-analysis/6_4.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Complex Analysis Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/complex-analysis.md" }
            ]
          }
        ]
      },
      {
        id: "partial-differential-equations",
        name: "Partial Differential Equations",
        subtitle: "Heat, Wave, Laplace equations and solution methods",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Introduction to Partial Differential Equations",
            topics: [
              { id: "1.1", title: "1.1: What are PDEs?", description: "Definition, order, linear vs. nonlinear, examples from physics", contentPath: "/articles/partial-differential-equations/1_1.md" },
              { id: "1.2", title: "1.2: Classification of Second-Order PDEs", description: "Elliptic, parabolic, hyperbolic; discriminant method", contentPath: "/articles/partial-differential-equations/1_2.md" },
              { id: "1.3", title: "1.3: Well-Posed Problems", description: "Initial conditions, boundary conditions, uniqueness and existence", contentPath: "/articles/partial-differential-equations/1_3.md" },
              { id: "1.4", title: "1.4: Superposition Principle", description: "Linear combinations of solutions for linear PDEs", contentPath: "/articles/partial-differential-equations/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: First-Order Partial Differential Equations",
            topics: [
              { id: "2.1", title: "2.1: Linear First-Order PDEs", description: "Method of characteristics for linear first-order PDEs", contentPath: "/articles/partial-differential-equations/2_1.md" },
              { id: "2.2", title: "2.2: Quasilinear Equations", description: "Characteristics for quasilinear PDEs", contentPath: "/articles/partial-differential-equations/2_2.md" },
              { id: "2.3", title: "2.3: General First-Order PDEs", description: "Complete integrals and general solutions for first-order PDEs", contentPath: "/articles/partial-differential-equations/2_3.md" },
              { id: "2.4", title: "2.4: Conservation Laws", description: "Traffic flow, Burgers' equation, and shock waves", contentPath: "/articles/partial-differential-equations/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Fourier Series and Orthogonal Functions",
            topics: [
              { id: "3.1", title: "3.1: Fourier Series Fundamentals", description: "Periodic functions, convergence and coefficient formulas", contentPath: "/articles/partial-differential-equations/3_1.md" },
              { id: "3.2", title: "3.2: Fourier Sine and Cosine Series", description: "Even and odd extensions and boundary-matched series", contentPath: "/articles/partial-differential-equations/3_2.md" },
              { id: "3.3", title: "3.3: Convergence Theory", description: "Pointwise, uniform and mean-square convergence", contentPath: "/articles/partial-differential-equations/3_3.md" },
              { id: "3.4", title: "3.4: Gibbs Phenomenon and Generalized Fourier Series", description: "Overshoots near discontinuities; orthogonal expansions", contentPath: "/articles/partial-differential-equations/3_4.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: The Heat Equation",
            topics: [
              { id: "4.1", title: "4.1: Derivation and Physical Interpretation", description: "Heat conduction, Fourier's law, thermal diffusivity", contentPath: "/articles/partial-differential-equations/4_1.md" },
              { id: "4.2", title: "4.2: Separation of Variables", description: "Product solutions and spatial eigenfunctions", contentPath: "/articles/partial-differential-equations/4_2.md" },
              { id: "4.3", title: "4.3: Fourier Series Solutions", description: "Eigenfunction expansions for finite domains", contentPath: "/articles/partial-differential-equations/4_3.md" },
              { id: "4.4", title: "4.4: Maximum Principle and Fundamental Solution", description: "Maximum principle, uniqueness proofs and the heat kernel", contentPath: "/articles/partial-differential-equations/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: The Wave Equation",
            topics: [
              { id: "5.1", title: "5.1: Derivation and Physical Interpretation", description: "Vibrating string derivation from Newton's law", contentPath: "/articles/partial-differential-equations/5_1.md" },
              { id: "5.2", title: "5.2: D’Alembert’s Solution", description: "General infinite string solution and propagation", contentPath: "/articles/partial-differential-equations/5_2.md" },
              { id: "5.3", title: "5.3: Separation of Variables", description: "Standing waves and normal modes", contentPath: "/articles/partial-differential-equations/5_3.md" },
              { id: "5.4", title: "5.4: Energy Methods and Higher Dimensions", description: "Energy conservation, uniqueness, circular membranes and Bessel functions", contentPath: "/articles/partial-differential-equations/5_4.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Laplace’s and Poisson’s Equations",
            topics: [
              { id: "6.1", title: "6.1: Derivation and Applications", description: "Steady-state heat, electrostatics, and gravity applications", contentPath: "/articles/partial-differential-equations/6_1.md" },
              { id: "6.2", title: "6.2: Separation of Variables in Rectangles", description: "Product solutions with Fourier series for rectangular domains", contentPath: "/articles/partial-differential-equations/6_2.md" },
              { id: "6.3", title: "6.3: Polar Coordinates", description: "Laplace's equation in polar and circular domains", contentPath: "/articles/partial-differential-equations/6_3.md" },
              { id: "6.4", title: "6.4: Maximum Principle and Green’s Identities", description: "Harmonic functions, mean value, and integral identities", contentPath: "/articles/partial-differential-equations/6_4.md" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Transform Methods",
            topics: [
              { id: "7.1", title: "7.1: Fourier Transform", description: "Definition, properties and convolution theorem", contentPath: "/articles/partial-differential-equations/7_1.md" },
              { id: "7.2", title: "7.2: Solving PDEs with Fourier Transforms", description: "Using transforms for PDEs on infinite domains", contentPath: "/articles/partial-differential-equations/7_2.md" },
              { id: "7.3", title: "7.3: Laplace Transform for PDEs", description: "Time-dependent PDEs with Laplace transforms", contentPath: "/articles/partial-differential-equations/7_3.md" },
              { id: "7.4", title: "7.4: Applications to Wave and Diffusion Equations", description: "Transform pairs and inverse transforms for wave/diffusion PDEs", contentPath: "/articles/partial-differential-equations/7_4.md" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Sturm-Liouville Theory and Green’s Functions",
            topics: [
              { id: "8.1", title: "8.1: Sturm-Liouville Problems", description: "Eigenvalue problems with weight functions and orthogonality", contentPath: "/articles/partial-differential-equations/8_1.md" },
              { id: "8.2", title: "8.2: Eigenfunction Expansions", description: "Inner products and completeness of eigenfunction sets", contentPath: "/articles/partial-differential-equations/8_2.md" },
              { id: "8.3", title: "8.3: Green's Functions for ODEs", description: "Expanding functions using eigenfunction bases", contentPath: "/articles/partial-differential-equations/8_3.md" },
              { id: "8.4", title: "8.4: Green’s Functions for PDEs", description: "Green's functions for ODE boundary value problems", contentPath: "/articles/partial-differential-equations/8_4.md" },
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "PDEs Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/partial-differential-equations.md" }
            ]
          }
        ]
      },
      {
        id: "real-analysis",
        name: "Real Analysis",
        subtitle: "Rigorous foundations of calculus",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Real Numbers and Sequences",
            topics: [
              { id: "1.1", title: "1.1: Real Numbers and Completeness", description: "Axioms of real numbers, supremum and infimum, completeness axiom", contentPath: "/articles/real-analysis/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Real Analysis Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/real-analysis.md" }
            ]
          }
        ]
      }
    ]
  },
  algebraicMath: {
    title: "Algebraic Mathematics",
    color: "#8E44FF",
    courses: [
      {
        id: "linear-algebra",
        name: "Linear Algebra",
        subtitle: "Linear Algebra",
        badge: "2",
        units: [
          {
            id: "1",
            title: "Unit 1: Systems of Linear Equations and Matrices",
            topics: [
              { id: "1.1", title: "1.1: Systems of Linear Equations", description: "Introduction to solving systems of linear equations using algebraic and geometric interpretations", contentPath: "/articles/linear-algebra/1_1.md" },
              { id: "1.2", title: "1.2: Row Reduction and Echelon Forms", description: "Gaussian elimination and reduced row echelon form for solving linear systems systematically", contentPath: "/articles/linear-algebra/1_2.md" },
              { id: "1.3", title: "1.3: Matrix Operations", description: "Matrix addition, scalar multiplication, matrix multiplication, and transpose operations with their properties", contentPath: "/articles/linear-algebra/1_3.md" },
              { id: "1.4", title: "1.4: Matrix Inverses", description: "Computing and applying matrix inverses to solve equations and understand invertibility conditions", contentPath: "/articles/linear-algebra/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Vector Spaces",
            topics: [
              { id: "2.1", title: "2.1: Vector Spaces and Subspaces", description: "Abstract vector spaces, axioms, and identifying subspaces within vector spaces", contentPath: "/articles/linear-algebra/2_1.md" },
              { id: "2.2", title: "2.2: Linear Independence", description: "Determining when sets of vectors are linearly independent or dependent using linear combinations", contentPath: "/articles/linear-algebra/2_2.md" },
              { id: "2.3", title: "2.3: Bases and Dimension", description: "Finding bases for vector spaces and subspaces and computing their dimensions", contentPath: "/articles/linear-algebra/2_3.md" },
              { id: "2.4", title: "2.4: Coordinate Systems", description: "Representing vectors in different coordinate systems using basis transformations and change of basis matrices", contentPath: "/articles/linear-algebra/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Linear Transformations",
            topics: [
              { id: "3.1", title: "3.1: Introduction to Linear Transformations", description: "Defining and understanding linear transformations between vector spaces with matrix representations", contentPath: "/articles/linear-algebra/3_1.md" },
              { id: "3.2", title: "3.2: Kernel and Range", description: "Finding the kernel (null space) and range (column space) of linear transformations and their properties", contentPath: "/articles/linear-algebra/3_2.md" },
              { id: "3.3", title: "3.3: Composition and Invertibility", description: "Composing linear transformations and determining when a transformation is invertible", contentPath: "/articles/linear-algebra/3_3.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Determinants",
            topics: [
              { id: "4.1", title: "4.1: Determinant Calculation", description: "Computing determinants using cofactor expansion, row reduction, and special matrix forms", contentPath: "/articles/linear-algebra/4_1.md" },
              { id: "4.2", title: "4.2: Properties of Determinants", description: "Exploring determinant properties including multiplicativity, row operations, and transpose relationships", contentPath: "/articles/linear-algebra/4_2.md" },
              { id: "4.3", title: "4.3: Geometric Interpretation", description: "Understanding determinants as volume scaling factors and their geometric significance in transformations", contentPath: "/articles/linear-algebra/4_3.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Eigenvalues and Eigenvectors",
            topics: [
              { id: "5.1", title: "5.1: Eigenvalues and Eigenvectors", description: "Finding eigenvalues and eigenvectors of matrices using characteristic polynomials and eigenspaces", contentPath: "/articles/linear-algebra/5_1.md" },
              { id: "5.2", title: "5.2: Diagonalization", description: "Diagonalizing matrices when possible and understanding the conditions for diagonalizability", contentPath: "/articles/linear-algebra/5_2.md" },
              { id: "5.3", title: "5.3: Applications of Eigenvalues", description: "Applying eigenvalue theory to dynamical systems, differential equations, and data analysis problems", contentPath: "/articles/linear-algebra/5_3.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Orthogonality and Least Squares",
            topics: [
              { id: "6.1", title: "6.1: Inner Products and Orthogonality", description: "Defining inner products, norms, and angles between vectors with orthogonality conditions", contentPath: "/articles/linear-algebra/6_1.md" },
              { id: "6.2", title: "6.2: Orthogonal Projections", description: "Projecting vectors onto subspaces and finding closest approximations using orthogonal projections", contentPath: "/articles/linear-algebra/6_2.md" },
              { id: "6.3", title: "6.3: Orthogonal Bases and Gram-Schmidt", description: "Constructing orthonormal bases from arbitrary bases using the Gram-Schmidt orthogonalization process", contentPath: "/articles/linear-algebra/6_3.md" },
              { id: "6.4", title: "6.4: QR Factorization", description: "Decomposing matrices into orthogonal and upper triangular factors for computational applications", contentPath: "/articles/linear-algebra/6_4.md" },
              { id: "6.5", title: "6.5: Least Squares Problems", description: "Solving overdetermined systems and regression problems using least squares minimization techniques", contentPath: "/articles/linear-algebra/6_5.md" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Symmetric Matrices and Quadratic Forms",
            topics: [
              { id: "7.1", title: "7.1: Symmetric Matrices", description: "Properties of symmetric matrices including real eigenvalues and orthogonal eigenvector sets", contentPath: "/articles/linear-algebra/7_1.md" },
              { id: "7.2", title: "7.2: Quadratic Forms", description: "Analyzing quadratic forms, their matrix representations, and classification as positive or negative definite", contentPath: "/articles/linear-algebra/7_2.md" },
              { id: "7.3", title: "7.3: Applications of Spectral Decomposition", description: "Using spectral theorem for symmetric matrices in optimization, geometry, and principal component analysis", contentPath: "/articles/linear-algebra/7_3.md" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Additional Topics and Applications",
            topics: [
              { id: "8.1", title: "8.1: Complex Vector Spaces", description: "Extending linear algebra concepts to complex vector spaces with complex eigenvalues and inner products", contentPath: "/articles/linear-algebra/8_1.md" },
              { id: "8.2", title: "8.2: Singular Value Decomposition", description: "SVD factorization of matrices for data compression, dimensionality reduction, and numerical stability", contentPath: "/articles/linear-algebra/8_2.md" },
              { id: "8.3", title: "8.3: Linear Programming (Introductory)", description: "Introduction to optimization problems with linear constraints using simplex method fundamentals", contentPath: "/articles/linear-algebra/8_3.md" },
              { id: "8.4", title: "8.4: Vector Calculus Connections", description: "Connecting linear algebra to multivariable calculus through gradients, Jacobians, and directional derivatives", contentPath: "/articles/linear-algebra/8_4.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Linear Algebra Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/linear-algebra.md" }
            ]
          }
        ]
      },
      {
        id: "tensor-calculus",
        name: "Tensor Calculus",
        subtitle: "Differential geometry and tensor analysis",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Introduction to Tensors",
            topics: [
              { id: "1.1", title: "1.1: Introduction to Tensors and Index Notation", description: "Tensor basics, Einstein summation convention, contravariant and covariant components", contentPath: "/articles/tensor-calculus/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Tensor Calculus Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/tensor-calculus.md" }
            ]
          }
        ]
      },
      {
        id: "group-theory",
        name: "Group Theory",
        subtitle: "Algebraic structures and symmetry",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Groups and Basic Properties",
            topics: [
              { id: "1.1", title: "1.1: Groups and Basic Properties", description: "Definition of groups, examples, basic theorems, subgroups", contentPath: "/articles/group-theory/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Group Theory Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/group-theory.md" }
            ]
          }
        ]
      }
    ]
  },
  classicalPhysics: {
    title: "Classical Physics",
    color: "#3A7CA5",
    courses: [
      {
        id: "classical-mechanics",
        name: "Classical Mechanics",
        subtitle: "Upper-level... not to be mistaken for introductory CM",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Mathematical Foundations and Kinematics",
            topics: [
              { id: "1.1", title: "1.1: Review of Vector Calculus", description: "Vector operations, position/velocity/acceleration, time derivatives", contentPath: "/articles/physics/classical-mechanics/1_1.md" },
              { id: "1.2", title: "1.2: Coordinate Systems", description: "Cartesian, polar, cylindrical, spherical, transformations", contentPath: "/articles/physics/classical-mechanics/1_2.md" },
              { id: "1.3", title: "1.3: Kinematics in Different Frames", description: "Motion in Cartesian/polar, circular motion, centripetal acceleration", contentPath: "/articles/physics/classical-mechanics/1_3.md" },
              { id: "1.4", title: "1.4: Relative Motion and Moving Reference Frames", description: "Velocity/acceleration in moving frames, rotating frames, Coriolis and centrifugal forces", contentPath: "/articles/physics/classical-mechanics/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Newton's Laws and Force Systems",
            topics: [
              { id: "2.1", title: "2.1: Newton's Laws of Motion", description: "Statement, interpretation, inertial frames, force as vector", contentPath: "/articles/physics/classical-mechanics/2_1.md" },
              { id: "2.2", title: "2.2: Common Force Laws", description: "Gravity, springs, friction, tension, normal forces, drag", contentPath: "/articles/physics/classical-mechanics/2_2.md" },
              { id: "2.3", title: "2.3: Applications of Newton's Second Law", description: "1D/2D/3D motion, constrained motion, circular motion", contentPath: "/articles/physics/classical-mechanics/2_3.md" },
              { id: "2.4", title: "2.4: Non-inertial Reference Frames", description: "Fictitious forces, rotating frames, Coriolis effect", contentPath: "/articles/physics/classical-mechanics/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Energy, Work, and Conservative Systems",
            topics: [
              { id: "3.1", title: "3.1: Work and Kinetic Energy", description: "Work along a path, work-energy theorem, power", contentPath: "/articles/physics/classical-mechanics/3_1.md" },
              { id: "3.2", title: "3.2: Conservative Forces and Potential Energy", description: "Path independence, gradient of potential, gravitational/elastic potential", contentPath: "/articles/physics/classical-mechanics/3_2.md" },
              { id: "3.3", title: "3.3: Conservation of Energy", description: "Mechanical energy, energy diagrams, equilibrium/stability", contentPath: "/articles/physics/classical-mechanics/3_3.md" },
              { id: "3.4", title: "3.4: Non-conservative Forces", description: "Dissipative forces, energy methods with non-conservative forces", contentPath: "/articles/physics/classical-mechanics/3_4.md" },
              { id: "3.5", title: "3.5: Central Forces", description: "Effective potential, radial/angular motion separation", contentPath: "/articles/physics/classical-mechanics/3_5.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Linear and Angular Momentum",
            topics: [
              { id: "4.1", title: "4.1: Linear Momentum", description: "Particle/system momentum, impulse-momentum theorem, conservation", contentPath: "/articles/physics/classical-mechanics/4_1.md" },
              { id: "4.2", title: "4.2: Center of Mass", description: "Definition, calculation, motion, reference frame", contentPath: "/articles/physics/classical-mechanics/4_2.md" },
              { id: "4.3", title: "4.3: Collisions", description: "Elastic/inelastic collisions, coefficient of restitution", contentPath: "/articles/physics/classical-mechanics/4_3.md" },
              { id: "4.4", title: "4.4: Angular Momentum", description: "Definition, torque, systems of particles", contentPath: "/articles/physics/classical-mechanics/4_4.md" },
              { id: "4.5", title: "4.5: Conservation of Angular Momentum", description: "Central forces, planetary motion, collisions", contentPath: "/articles/physics/classical-mechanics/4_5.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Oscillations and Waves",
            topics: [
              { id: "5.1", title: "5.1: Simple Harmonic Motion (SHM)", description: "Differential equation, solutions, energy", contentPath: "/articles/physics/classical-mechanics/5_1.md" },
              { id: "5.2", title: "5.2: Damped Oscillations", description: "Underdamped/critically damped/overdamped, quality factor", contentPath: "/articles/physics/classical-mechanics/5_2.md" },
              { id: "5.3", title: "5.3: Driven Oscillations and Resonance", description: "Forced oscillator, steady-state, resonance, phase relationships", contentPath: "/articles/physics/classical-mechanics/5_3.md" },
              { id: "5.4", title: "5.4: Coupled Oscillators", description: "Normal modes, eigenvalue problems, superposition of modes", contentPath: "/articles/physics/classical-mechanics/5_4.md" },
              { id: "5.5", title: "5.5: Introduction to Wave Motion", description: "Wave equation, traveling and standing waves", contentPath: "/articles/physics/classical-mechanics/5_5.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Central Forces and Orbital Mechanics",
            topics: [
              { id: "6.1", title: "6.1: General Central Motion", description: "Effective potential, radial equation of motion", contentPath: "/articles/physics/classical-mechanics/6_1.md" },
              { id: "6.2", title: "6.2: Kepler's Laws", description: "Kepler problem, orbit equation, orbital energy and momentum", contentPath: "/articles/physics/classical-mechanics/6_2.md" },
              { id: "6.3", title: "6.3: Gravitational Potential and Field", description: "Elliptical orbits, equal areas, T² ∝ a³", contentPath: "/articles/physics/classical-mechanics/6_3.md" },
              { id: "6.4", title: "6.4: Orbits and Orbital Energy", description: "Conic sections, eccentricity, escape velocity, orbit classification", contentPath: "/articles/physics/classical-mechanics/6_4.md" },
              { id: "6.5", title: "6.5: Scattering in Central Force Fields", description: "Scattering angle, impact parameter, cross section, Rutherford scattering", contentPath: "/articles/physics/classical-mechanics/6_5.md" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Lagrangian and Hamiltonian Mechanics",
            topics: [
              { id: "7.1", title: "7.1: Calculus of Variations", description: "Functional derivatives, Euler-Lagrange equation, brachistochrone problem", contentPath: "/articles/physics/classical-mechanics/7_1.md" },
              { id: "7.2", title: "7.2: Lagrangian Mechanics", description: "Generalized coordinates, configuration space, L = T - V, Lagrange's equations", contentPath: "/articles/physics/classical-mechanics/7_2.md" },
              { id: "7.3", title: "7.3: Hamiltonian Mechanics", description: "Constrained systems, pendulum, Atwood's machine, bead on hoop", contentPath: "/articles/physics/classical-mechanics/7_3.md" },
              { id: "7.4", title: "7.4: Small Oscillations", description: "Noether's theorem, cyclic coordinates, energy conservation", contentPath: "/articles/physics/classical-mechanics/7_4.md" },
              { id: "7.5", title: "7.5: Canonical Transformations", description: "Legendre transformation, Hamilton's equations, phase space", contentPath: "/articles/physics/classical-mechanics/7_5.md" },
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Classical Mechanics Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/classical-mechanics.md" }
            ]
          }
        ]
      },
      {
        id: "thermodynamics-statmech",
        name: "Thermodynamics & Statistical Mechanics",
        subtitle: "Thermodynamics & Statistical Mechanics",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Thermodynamic Systems and the Zeroth Law",
            topics: [
              { id: "1.1", title: "1.1: Thermodynamic Systems and State Variables", description: "Isolated/closed/open systems, extensive vs. intensive variables, Euler's theorem, partial derivatives", contentPath: "/articles/physics/thermodynamics-statmech/1_1.md" },
              { id: "1.2", title: "1.2: The Zeroth Law and Temperature", description: "Thermal equilibrium, empirical/absolute temperature, integrating factors, ideal gas law", contentPath: "/articles/physics/thermodynamics-statmech/1_2.md" },
              { id: "1.3", title: "1.3: Equations of State", description: "Ideal gas, Van der Waals, virial expansion, compressibility factor, critical points", contentPath: "/articles/physics/thermodynamics-statmech/1_3.md" },
              { id: "1.4", title: "1.4: Mathematical Methods in Thermodynamics", description: "Exact/inexact differentials, cyclic relations, Jacobians, chain rule", contentPath: "/articles/physics/thermodynamics-statmech/1_4.md" },
              { id: "1.5", title: "1.5: Work and Thermodynamic Processes", description: "Reversible/irreversible work, PV diagrams, isothermal/isobaric/isochoric/adiabatic/polytropic processes", contentPath: "/articles/physics/thermodynamics-statmech/1_5.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: The First Law of Thermodynamics",
            topics: [
              { id: "2.1", title: "2.1: The First Law and Internal Energy", description: "dU = δQ - δW, state vs. path functions, energy conservation", contentPath: "/articles/physics/thermodynamics-statmech/2_1.md" },
              { id: "2.2", title: "2.2: Heat Capacity and Enthalpy", description: "C_V, C_P, enthalpy, Mayer's relation, adiabatic index", contentPath: "/articles/physics/thermodynamics-statmech/2_2.md" },
              { id: "2.3", title: "2.3: Thermodynamic Processes for Ideal Gases", description: "Isothermal, adiabatic, isobaric, isochoric, free expansion", contentPath: "/articles/physics/thermodynamics-statmech/2_3.md" },
              { id: "2.4", title: "2.4: Real Gases and Joule-Thomson Effect", description: "Joule coefficient, Joule-Thomson coefficient, inversion temperature, liquefaction", contentPath: "/articles/physics/thermodynamics-statmech/2_4.md" },
              { id: "2.5", title: "2.5: Differential Equations in Thermodynamics", description: "ODEs/PDEs in heat transfer, Newton's cooling law, heat diffusion equation", contentPath: "/articles/physics/thermodynamics-statmech/2_5.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: The Second Law and Entropy",
            topics: [
              { id: "3.1", title: "3.1: The Second Law of Thermodynamics", description: "Kelvin-Planck and Clausius statements, heat engines, refrigerators, irreversibility", contentPath: "/articles/physics/thermodynamics-statmech/3_1.md" },
              { id: "3.2", title: "3.2: Carnot Cycle and Thermodynamic Temperature", description: "Carnot efficiency, temperature scale, reversible vs. irreversible cycles", contentPath: "/articles/physics/thermodynamics-statmech/3_2.md" },
              { id: "3.3", title: "3.3: Entropy and the Clausius Theorem", description: "Clausius inequality, entropy definition, reversible/irreversible processes, entropy increase principle", contentPath: "/articles/physics/thermodynamics-statmech/3_3.md" },
              { id: "3.4", title: "3.4: Entropy Changes in Various Processes", description: "Ideal gas processes, free expansion, mixing, phase transitions, heat transfer", contentPath: "/articles/physics/thermodynamics-statmech/3_4.md" },
              { id: "3.5", title: "3.5: Statistical Interpretation of Entropy", description: "Boltzmann formula, multiplicity, Gibbs entropy, information theory, third law", contentPath: "/articles/physics/thermodynamics-statmech/3_5.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Thermodynamic Potentials and Relations",
            topics: [
              { id: "4.1", title: "4.1: Thermodynamic Potentials and Legendre Transforms", description: "U, H, F, G, natural variables, Legendre transformations", contentPath: "/articles/physics/thermodynamics-statmech/4_1.md" },
              { id: "4.2", title: "4.2: Maxwell Relations and Thermodynamic Identities", description: "Derivation, four Maxwell relations, thermodynamic square, response functions", contentPath: "/articles/physics/thermodynamics-statmech/4_2.md" },
              { id: "4.3", title: "4.3: Response Functions and Stability", description: "Compressibility, expansion coefficient, stability criteria, Hessian matrices", contentPath: "/articles/physics/thermodynamics-statmech/4_3.md" },
              { id: "4.4", title: "4.4: Chemical Potential and Phase Equilibrium", description: "Gibbs-Duhem relation, Clausius-Clapeyron equation, phase diagrams, Gibbs phase rule", contentPath: "/articles/physics/thermodynamics-statmech/4_4.md" },
              { id: "4.5", title: "4.5: Open Systems and Chemical Reactions", description: "Grand canonical ensemble (preview), equilibrium constant, Van't Hoff equation", contentPath: "/articles/physics/thermodynamics-statmech/4_5.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Classical Statistical Mechanics",
            topics: [
              { id: "5.1", title: "5.1: Foundations of Statistical Mechanics", description: "Phase space, ensembles, ergodic hypothesis, Liouville's theorem", contentPath: "/articles/physics/thermodynamics-statmech/5_1.md" },
              { id: "5.2", title: "5.2: Microcanonical Ensemble", description: "Density of states, entropy, temperature, pressure, ideal gas example", contentPath: "/articles/physics/thermodynamics-statmech/5_2.md" },
              { id: "5.3", title: "5.3: Canonical Ensemble and Partition Function", description: "Boltzmann distribution, partition function, free energy, average energy, fluctuations", contentPath: "/articles/physics/thermodynamics-statmech/5_3.md" },
              { id: "5.4", title: "5.4: Applications of Canonical Ensemble", description: "Two-state systems, harmonic oscillators, ideal gas, equipartition theorem, Gibbs paradox", contentPath: "/articles/physics/thermodynamics-statmech/5_4.md" },
              { id: "5.5", title: "5.5: Grand Canonical Ensemble", description: "Grand partition function, grand potential, average particle number, fugacity, fluctuations", contentPath: "/articles/physics/thermodynamics-statmech/5_5.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Quantum Statistical Mechanics",
            topics: [
              { id: "6.1", title: "6.1: Quantum Statistics and Indistinguishability", description: "Fermions vs. bosons, occupation numbers, Fock space", contentPath: "/articles/physics/thermodynamics-statmech/6_1.md" },
              { id: "6.2", title: "6.2: Fermi-Dirac Statistics", description: "Distribution, Fermi energy, density of states, degenerate Fermi gas", contentPath: "/articles/physics/thermodynamics-statmech/6_2.md" },
              { id: "6.3", title: "6.3: Bose-Einstein Statistics", description: "Distribution, BEC, critical temperature, condensate fraction, photon gas", contentPath: "/articles/physics/thermodynamics-statmech/6_3.md" },
              { id: "6.4", title: "6.4: Blackbody Radiation and Photon Gas", description: "Planck distribution, Stefan-Boltzmann law, Wien's law, CMB", contentPath: "/articles/physics/thermodynamics-statmech/6_4.md" },
              { id: "6.5", title: "6.5: Debye and Einstein Models of Solids", description: "Einstein heat capacity, Debye model, T³ law, Dulong-Petit law", contentPath: "/articles/physics/thermodynamics-statmech/6_5.md" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Kinetic Theory and Transport Phenomena",
            topics: [
              { id: "7.1", title: "7.1: Kinetic Theory of Gases", description: "Pressure from collisions, RMS speed, equipartition theorem, effusion", contentPath: "/articles/physics/thermodynamics-statmech/7_1.md" },
              { id: "7.2", title: "7.2: Maxwell-Boltzmann Distribution", description: "Velocity/speed distributions, most probable/mean/RMS speeds, energy distribution", contentPath: "/articles/physics/thermodynamics-statmech/7_2.md" },
              { id: "7.3", title: "7.3: Collisions and Mean Free Path", description: "Collision cross section, mean free path, collision frequency, exponential distribution", contentPath: "/articles/physics/thermodynamics-statmech/7_3.md" },
              { id: "7.4", title: "7.4: Transport Phenomena I: Diffusion and Viscosity", description: "Fick's laws, diffusion coefficient, viscosity, temperature dependence", contentPath: "/articles/physics/thermodynamics-statmech/7_4.md" },
              { id: "7.5", title: "7.5: Transport Phenomena II: Thermal Conductivity", description: "Heat conduction, thermal conductivity, Fourier's law", contentPath: "/articles/physics/thermodynamics-statmech/7_5.md" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Phase Transitions and Critical Phenomena",
            topics: [
              { id: "8.1", title: "8.1: Classification of Phase Transitions", description: "First-order vs. second-order transitions, order parameters, symmetry breaking", contentPath: "/articles/physics/thermodynamics-statmech/8_1.md" },
              { id: "8.2", title: "8.2: Critical Phenomena and Scaling", description: "Critical exponents, scaling laws, universality classes", contentPath: "/articles/physics/thermodynamics-statmech/8_2.md" },
              { id: "8.3", title: "8.3: Ising Model", description: "One-dimensional and two-dimensional Ising models, exact solutions", contentPath: "/articles/physics/thermodynamics-statmech/8_3.md" },
              { id: "8.4", title: "8.4: Mean-Field Theory", description: "Mean-field approximation, Weiss molecular field, Curie-Weiss law", contentPath: "/articles/physics/thermodynamics-statmech/8_4.md" },
              { id: "8.5", title: "8.5: Landau Theory and Renormalization (Introduction)", description: "Landau free energy, renormalization group concepts, scaling transformations", contentPath: "/articles/physics/thermodynamics-statmech/8_5.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Thermodynamics & StatMech Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/thermodynamics-statmech.md" }
            ]
          }
        ]
      },
      {
        id: "fluid-mechanics",
        name: "Fluid Mechanics",
        subtitle: "Fluid Mechanics",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Fluid Properties and Statics",
            topics: [
              { id: "1.1", title: "1.1: Continuum Hypothesis and Fluid Properties", description: "Continuum approximation, density and pressure as continuous fields, Newtonian and non-Newtonian fluids", contentPath: "/articles/physics/fluid-mechanics/1_1.md" },
              { id: "1.2", title: "1.2: Viscosity and Non-Newtonian Fluids", description: "Molecular origins of viscosity, Newton's law of viscosity, constitutive relations for non-Newtonian fluids", contentPath: "/articles/physics/fluid-mechanics/1_2.md" },
              { id: "1.3", title: "1.3: Fluid Statics and Pressure Distribution", description: "Hydrostatic equilibrium, pressure variation with depth, forces on submerged surfaces, Archimedes' principle", contentPath: "/articles/physics/fluid-mechanics/1_3.md" },
              { id: "1.4", title: "1.4: Surface Tension and Capillarity", description: "Young-Laplace equation, contact angles and wetting, capillary rise", contentPath: "/articles/physics/fluid-mechanics/1_4.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Fluid Kinematics and Conservation Laws",
            topics: [
              { id: "2.1", title: "2.1: Kinematics: Describing Fluid Motion", description: "Lagrangian vs. Eulerian descriptions, material derivative, streamlines, pathlines, and streaklines", contentPath: "/articles/physics/fluid-mechanics/2_1.md" },
              { id: "2.2", title: "2.2: Rate-of-Strain and Vorticity", description: "Velocity gradient decomposition, strain rate and rotation, vorticity and circulation", contentPath: "/articles/physics/fluid-mechanics/2_2.md" },
              { id: "2.3", title: "2.3: Conservation of Mass: Continuity Equation", description: "Reynolds transport theorem, continuity equation derivation, incompressibility condition", contentPath: "/articles/physics/fluid-mechanics/2_3.md" },
              { id: "2.4", title: "2.4: Conservation of Momentum: Euler and Navier-Stokes Equations", description: "Euler equation for inviscid flow, Navier-Stokes equations with viscous stress, boundary conditions", contentPath: "/articles/physics/fluid-mechanics/2_4.md" },
              { id: "2.5", title: "2.5: Conservation of Energy", description: "First law for flowing fluids, energy equation, viscous dissipation, Bernoulli preview", contentPath: "/articles/physics/fluid-mechanics/2_5.md" },
              { id: "2.6", title: "2.6: Dimensional Analysis and Similarity", description: "Buckingham Pi theorem, Reynolds, Froude, and Mach numbers, dynamic similarity", contentPath: "/articles/physics/fluid-mechanics/2_6.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Inviscid Flow and Potential Theory",
            topics: [
              { id: "3.1", title: "3.1: Bernoulli's Equation and Applications", description: "Bernoulli's principle, stagnation pressure, flow measurement applications", contentPath: "/articles/physics/fluid-mechanics/3_1.md" },
              { id: "3.2", title: "3.2: Potential Flow Theory", description: "Irrotational flows, velocity potential, Laplace equation, stream function, elementary solutions", contentPath: "/articles/physics/fluid-mechanics/3_2.md" },
              { id: "3.3", title: "3.3: Complex Potential and Conformal Mapping", description: "Complex potential, Cauchy-Riemann conditions, Joukowski transformation, Kutta-Joukowski theorem", contentPath: "/articles/physics/fluid-mechanics/3_3.md" },
              { id: "3.4", title: "3.4: Vorticity Dynamics and Circulation", description: "Vorticity transport, Kelvin's circulation theorem, Helmholtz theorems, Biot-Savart law", contentPath: "/articles/physics/fluid-mechanics/3_4.md" },
              { id: "3.5", title: "3.5: Lifting Surfaces and Added Mass", description: "Thin airfoil theory, Kutta condition, lifting line theory, added mass concept", contentPath: "/articles/physics/fluid-mechanics/3_5.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Viscous Flow and Boundary Layers",
            topics: [
              { id: "4.1", title: "4.1: Exact Solutions to Navier-Stokes Equations", description: "Couette flow, Poiseuille flow, Stokes flow around sphere, similarity solutions", contentPath: "/articles/physics/fluid-mechanics/4_1.md" },
              { id: "4.2", title: "4.2: Laminar Boundary Layers: Prandtl's Theory", description: "Prandtl's approximation, Blasius solution, von Kármán momentum integral", contentPath: "/articles/physics/fluid-mechanics/4_2.md" },
              { id: "4.3", title: "4.3: Boundary Layer Separation and Drag", description: "Separation criterion, adverse pressure gradients, pressure drag vs. skin friction, drag crisis", contentPath: "/articles/physics/fluid-mechanics/4_3.md" },
              { id: "4.4", title: "4.4: Viscous Flow in Pipes and Channels", description: "Laminar to turbulent transition, Hagen-Poiseuille law, friction factor, Moody diagram", contentPath: "/articles/physics/fluid-mechanics/4_4.md" },
              { id: "4.5", title: "4.5: Lubrication Theory", description: "Reynolds lubrication equation, thin film flows, slider and squeeze film bearings", contentPath: "/articles/physics/fluid-mechanics/4_5.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Turbulence and Instability",
            topics: [
              { id: "5.1", title: "5.1: Instability and Transition to Turbulence", description: "Linear stability analysis, Orr-Sommerfeld problem, Rayleigh criterion, Tollmien-Schlichting waves", contentPath: "/articles/physics/fluid-mechanics/5_1.md" },
              { id: "5.2", title: "5.2: Reynolds Decomposition and Averaged Equations", description: "Mean and fluctuating components, RANS equations, Reynolds stress tensor, closure problem", contentPath: "/articles/physics/fluid-mechanics/5_2.md" },
              { id: "5.3", title: "5.3: Turbulence Modeling", description: "Mixing length, eddy viscosity, k-ε model, Reynolds Stress Models, LES and DNS", contentPath: "/articles/physics/fluid-mechanics/5_3.md" },
              { id: "5.4", title: "5.4: Energy Cascade and Kolmogorov Theory", description: "Richardson cascade, Kolmogorov microscales, -5/3 power law, isotropy at small scales", contentPath: "/articles/physics/fluid-mechanics/5_4.md" },
              { id: "5.5", title: "5.5: Wall-Bounded Turbulence", description: "Turbulent boundary layer structure, law of the wall, velocity defect law, surface roughness effects", contentPath: "/articles/physics/fluid-mechanics/5_5.md" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Compressible Flow",
            topics: [
              { id: "6.1", title: "6.1: Thermodynamics of Compressible Flow", description: "Ideal gas equation of state, speed of sound, Mach number, isentropic relations, stagnation properties", contentPath: "/articles/physics/fluid-mechanics/6_1.md" },
              { id: "6.2", title: "6.2: One-Dimensional Isentropic Flow", description: "Area-velocity relation, de Laval nozzle, choked flow, critical area ratio", contentPath: "/articles/physics/fluid-mechanics/6_2.md" },
              { id: "6.3", title: "6.3: Normal and Oblique Shock Waves", description: "Rankine-Hugoniot conditions, entropy increase, oblique shocks, detached shocks", contentPath: "/articles/physics/fluid-mechanics/6_3.md" },
              { id: "6.4", title: "6.4: Expansion Waves and Prandtl-Meyer Flow", description: "Isentropic expansion fan, Prandtl-Meyer function, method of characteristics, Mach lines", contentPath: "/articles/physics/fluid-mechanics/6_4.md" },
              { id: "6.5", title: "6.5: Quasi-One-Dimensional Flow with Friction and Heat Transfer", description: "Fanno flow with friction, Rayleigh flow with heat addition, thermal choking, h-s and T-s diagrams", contentPath: "/articles/physics/fluid-mechanics/6_5.md" },
              { id: "6.6", title: "6.6: Multidimensional Supersonic Flow", description: "Linearized supersonic flow, Ackeret formula, shock-expansion theory, transonic area rule, hypersonic similarity", contentPath: "/articles/physics/fluid-mechanics/6_6.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Fluid Mechanics Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/fluid-mechanics.md" }
            ]
          }
        ]
      },
      {
        id: "heat-mass-transfer",
        name: "Heat and Mass Transfer",
        subtitle: "Energy and mass transport phenomena",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Conduction Heat Transfer",
            topics: [
              { id: "1.1", title: "1.1: Fourier's Law and Steady-State Conduction", description: "Fundamentals of heat conduction and thermal conductivity", contentPath: "/articles/physics/heat-mass-transfer/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Heat and Mass Transfer Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/heat-mass-transfer.md" }
            ]
          }
        ]
      },
      {
        id: "electromagnetism",
        name: "Electromagnetism",
        subtitle: "Electromagnetism",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Maxwell's Equations and Waves",
            topics: [
              { id: "1.1", title: "1.1: Maxwell's Equations", contentPath: "/articles/physics/electromagnetism/1_1.md" },
              { id: "1.2", title: "1.2: Electromagnetic Waves", contentPath: "/articles/physics/electromagnetism/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Statics",
            topics: [
              { id: "2.1", title: "2.1: Electrostatics", contentPath: "/articles/physics/electromagnetism/2_1.md" },
              { id: "2.2", title: "2.2: Magnetostatics", contentPath: "/articles/physics/electromagnetism/2_2.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Advanced Topics",
            topics: [
              { id: "3.1", title: "3.1: Advanced Topics", contentPath: "/articles/physics/electromagnetism/3_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Electromagnetism Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/electromagnetism.md" }
            ]
          }
        ]
      }
    ]
  },
  modernPhysics: {
    title: "Modern Physics",
    color: "#00A3A6",
    courses: [
      {
        id: "special-relativity",
        name: "Special Relativity",
        subtitle: "Spacetime and relativistic mechanics",
        badge: "2",
        units: [
          {
            id: "1",
            title: "Unit 1: Foundations of Special Relativity",
            topics: [
              { id: "1.1", title: "1.1: Lorentz Transformations and Spacetime", description: "Postulates of special relativity, Lorentz transformations, spacetime diagrams", contentPath: "/articles/physics/special-relativity/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Special Relativity Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/special-relativity.md" }
            ]
          }
        ]
      },
      {
        id: "quantum-mechanics-1",
        name: "Quantum Mechanics 1",
        subtitle: "Foundations of quantum theory",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Mathematical Foundations and Formalism",
            topics: [
              { id: "1.1", title: "1.1: Hilbert Spaces, Operators, and Observables", description: "Mathematical framework of quantum mechanics: state spaces, operators, and measurement", contentPath: "/articles/physics/quantum-mechanics-1/1_1.md" },
              { id: "1.2", title: "1.2: Measurement, Eigenvalues, and Uncertainty", description: "Quantum measurement theory, eigenvalue problems, and the uncertainty principle", contentPath: "/articles/physics/quantum-mechanics-1/1_2.md" },
              { id: "1.3", title: "1.3: Time Evolution and the Schrödinger Equation", description: "Time-dependent and time-independent Schrödinger equations and quantum dynamics", contentPath: "/articles/physics/quantum-mechanics-1/1_3.md" },
              { id: "1.4", title: "1.4: Dirac Notation and Matrix Mechanics", description: "Bra-ket notation and matrix representation of quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-1/1_4.md" },
              { id: "1.5", title: "1.5: Heisenberg Picture and Equations of Motion", description: "Alternative formulations of quantum mechanics and time evolution of operators", contentPath: "/articles/physics/quantum-mechanics-1/1_5.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: One-Dimensional Quantum Systems",
            topics: [
              { id: "2.1", title: "2.1: Infinite Square Well and Finite Square Well", description: "Particle in a box: energy quantization and bound states", contentPath: "/articles/physics/quantum-mechanics-1/2_1.md" },
              { id: "2.2", title: "2.2: Harmonic Oscillator (Analytical and Algebraic Methods)", description: "Quantum harmonic oscillator: ladder operators and energy spectrum", contentPath: "/articles/physics/quantum-mechanics-1/2_2.md" },
              { id: "2.3", title: "2.3: Free Particle and Wave Packets", description: "Free particle solutions and the wave packet approach to quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-1/2_3.md" },
              { id: "2.4", title: "2.4: Delta Function Potential and Tunneling", description: "Scattering and tunneling through potential barriers", contentPath: "/articles/physics/quantum-mechanics-1/2_4.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Three-Dimensional Systems and Angular Momentum",
            topics: [
              { id: "3.1", title: "3.1: Schrödinger Equation in 3D and Central Potentials", description: "Extension to three dimensions and separation of variables for central potentials", contentPath: "/articles/physics/quantum-mechanics-1/3_1.md" },
              { id: "3.2", title: "3.2: Orbital Angular Momentum", description: "Angular momentum operators, eigenvalues, and spherical harmonics", contentPath: "/articles/physics/quantum-mechanics-1/3_2.md" },
              { id: "3.3", title: "3.3: Hydrogen Atom", description: "Exact solution of the hydrogen atom and quantum numbers", contentPath: "/articles/physics/quantum-mechanics-1/3_3.md" },
              { id: "3.4", title: "3.4: Radial Equation and Effective Potential", description: "Radial wave functions and the centrifugal barrier", contentPath: "/articles/physics/quantum-mechanics-1/3_4.md" },
              { id: "3.5", title: "3.5: 3D Harmonic Oscillator", description: "Three-dimensional harmonic oscillator and degeneracy", contentPath: "/articles/physics/quantum-mechanics-1/3_5.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Spin and Identical Particles",
            topics: [
              { id: "4.1", title: "4.1: Spin-1/2 and Pauli Matrices", description: "Intrinsic angular momentum: spin and its matrix representation", contentPath: "/articles/physics/quantum-mechanics-1/4_1.md" },
              { id: "4.2", title: "4.2: Addition of Angular Momentum and Clebsch-Gordan", description: "Combining angular momenta and Clebsch-Gordan coefficients", contentPath: "/articles/physics/quantum-mechanics-1/4_2.md" },
              { id: "4.3", title: "4.3: Identical Particles and Exchange Symmetry", description: "Indistinguishability, symmetrization, and the Pauli exclusion principle", contentPath: "/articles/physics/quantum-mechanics-1/4_3.md" },
              { id: "4.4", title: "4.4: Quantum Statistics (Fermi-Dirac and Bose-Einstein)", description: "Statistical mechanics of fermions and bosons", contentPath: "/articles/physics/quantum-mechanics-1/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Time-Independent Perturbation Theory",
            topics: [
              { id: "5.1", title: "5.1: Non-degenerate Perturbation Theory", description: "Approximate methods for systems with small perturbations", contentPath: "/articles/physics/quantum-mechanics-1/5_1.md" },
              { id: "5.2", title: "5.2: Degenerate Perturbation Theory and Fine Structure", description: "Perturbation theory for degenerate states and fine structure corrections", contentPath: "/articles/physics/quantum-mechanics-1/5_2.md" },
              { id: "5.3", title: "5.3: Zeeman and Stark Effects", description: "Atoms in external magnetic and electric fields", contentPath: "/articles/physics/quantum-mechanics-1/5_3.md" },
              { id: "5.4", title: "5.4: Hyperfine Structure", description: "Nuclear spin effects and hyperfine splitting of atomic energy levels", contentPath: "/articles/physics/quantum-mechanics-1/5_4.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Quantum Mechanics 1 Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/quantum-mechanics-1.md" }
            ]
          }
        ]
      },
      {
        id: "quantum-mechanics-2",
        name: "Quantum Mechanics 2",
        subtitle: "Advanced quantum theory and applications",
        badge: "4",
        units: [
          {
            id: "6",
            title: "Unit 6: Time-Dependent Perturbation Theory",
            topics: [
              { id: "6.1", title: "6.1: Time-Dependent Perturbation Theory and Fermi's Golden Rule", description: "Transitions between quantum states and decay rates", contentPath: "/articles/physics/quantum-mechanics-2/6_1.md" },
              { id: "6.2", title: "6.2: Absorption and Emission of Radiation", description: "Interaction of atoms with electromagnetic radiation", contentPath: "/articles/physics/quantum-mechanics-2/6_2.md" },
              { id: "6.3", title: "6.3: Selection Rules", description: "Allowed and forbidden transitions in atomic systems", contentPath: "/articles/physics/quantum-mechanics-2/6_3.md" },
              { id: "6.4", title: "6.4: Adiabatic Theorem and Berry's Phase", description: "Slowly varying systems and geometric phases", contentPath: "/articles/physics/quantum-mechanics-2/6_4.md" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Scattering Theory",
            topics: [
              { id: "7.1", title: "7.1: Cross Sections and Born Approximation", description: "Quantum scattering formalism and perturbative approximations", contentPath: "/articles/physics/quantum-mechanics-2/7_1.md" },
              { id: "7.2", title: "7.2: Partial Wave Analysis", description: "Angular momentum decomposition of scattering states", contentPath: "/articles/physics/quantum-mechanics-2/7_2.md" },
              { id: "7.3", title: "7.3: Phase Shifts and Resonances", description: "Scattering phase shifts and resonance phenomena", contentPath: "/articles/physics/quantum-mechanics-2/7_3.md" },
              { id: "7.4", title: "7.4: Identical Particles in Scattering", description: "Exchange effects in quantum scattering processes", contentPath: "/articles/physics/quantum-mechanics-2/7_4.md" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Approximation Methods",
            topics: [
              { id: "8.1", title: "8.1: Variational Principle", description: "Variational method for estimating ground state energies", contentPath: "/articles/physics/quantum-mechanics-2/8_1.md" },
              { id: "8.2", title: "8.2: WKB Approximation and Tunneling", description: "Semiclassical approximation for slowly varying potentials", contentPath: "/articles/physics/quantum-mechanics-2/8_2.md" },
              { id: "8.3", title: "8.3: Density Matrix Formalism", description: "Mixed states and the statistical description of quantum systems", contentPath: "/articles/physics/quantum-mechanics-2/8_3.md" }
            ]
          },
          {
            id: "9",
            title: "Unit 9: Relativistic Quantum Mechanics",
            topics: [
              { id: "9.1", title: "9.1: Klein-Gordon Equation", description: "Relativistic quantum mechanics for spin-0 particles", contentPath: "/articles/physics/quantum-mechanics-2/9_1.md" },
              { id: "9.2", title: "9.2: Dirac Equation and Spinors", description: "Relativistic equation for spin-1/2 particles and spinor formalism", contentPath: "/articles/physics/quantum-mechanics-2/9_2.md" },
              { id: "9.3", title: "9.3: Hydrogen Atom with Dirac Equation", description: "Relativistic corrections to the hydrogen atom spectrum", contentPath: "/articles/physics/quantum-mechanics-2/9_3.md" },
              { id: "9.4", title: "9.4: Feynman Propagator", description: "Green's functions and propagators in quantum field theory", contentPath: "/articles/physics/quantum-mechanics-2/9_4.md" },
              { id: "9.5", title: "9.5: Antiparticles and CPT", description: "Antimatter and discrete symmetries in relativistic quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-2/9_5.md" }
            ]
          },
          {
            id: "10",
            title: "Unit 10: Quantum Theory of Radiation",
            topics: [
              { id: "10.1", title: "10.1: Field Quantization and Photons", description: "Quantization of the electromagnetic field", contentPath: "/articles/physics/quantum-mechanics-2/10_1.md" },
              { id: "10.2", title: "10.2: Coherent States and Photon Statistics", description: "Quantum states of light and statistical properties of photons", contentPath: "/articles/physics/quantum-mechanics-2/10_2.md" },
              { id: "10.3", title: "10.3: Spontaneous Emission and Lamb Shift", description: "Vacuum fluctuations and radiative corrections to atomic spectra", contentPath: "/articles/physics/quantum-mechanics-2/10_3.md" }
            ]
          },
          {
            id: "11",
            title: "Unit 11: Path Integrals and Advanced Topics",
            topics: [
              { id: "11.1", title: "11.1: Feynman Path Integral Formulation", description: "Sum over histories approach to quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-2/11_1.md" },
              { id: "11.2", title: "11.2: Gauge Theories and Aharonov-Bohm Effect", description: "Gauge invariance and topological phases in quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-2/11_2.md" },
              { id: "11.3", title: "11.3: Entanglement, Decoherence, and Foundations", description: "Quantum information, measurement problem, and interpretations of quantum mechanics", contentPath: "/articles/physics/quantum-mechanics-2/11_3.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Quantum Mechanics 2 Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/quantum-mechanics-2.md" }
            ]
          }
        ]
      },
      {
        id: "quantum-field-theory",
        name: "Quantum Field Theory",
        subtitle: "Quantum mechanics of fields and particles",
        badge: "4",
        units: [
          {
            id: "1",
            title: "Unit 1: Canonical Quantization",
            topics: [
              { id: "1.1", title: "1.1: Canonical Quantization and Free Fields", description: "Field quantization, creation and annihilation operators, Fock space", contentPath: "/articles/physics/quantum-field-theory/1_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Quantum Field Theory Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/quantum-field-theory.md" }
            ]
          }
        ]
      }
    ]
  },
  chemistry: {
    title: "Chemistry",
    color: "#4A9B7F",
    courses: [
      {
        id: "organic-chemistry",
        name: "Organic Chemistry",
        subtitle: "Organic Chemistry — Structure, Reaction & Mechanisms",
        badge: "2",
        units: [
          {
            id: "1",
            title: "Unit 1: Structure and Bonding",
            topics: [
              { id: "1.1", title: "1.1: Structure and Bonding", contentPath: "/articles/chemistry/organic-chemistry/1_1.md" },
              { id: "1.2", title: "1.2: Alkanes and Functional Groups", contentPath: "/articles/chemistry/organic-chemistry/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Reactions and Mechanisms",
            topics: [
              { id: "2.1", title: "2.1: Reaction Mechanisms" },
              { id: "2.2", title: "2.2: Stereochemistry and Rearrangements" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Organic Chemistry Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/organic-chemistry.md" }
            ]
          }
        ]
      },
      {
        id: "material-science",
        name: "Introduction to Material Science",
        subtitle: "Introduction to Material Science",
        badge: "2",
        units: [
          {
            id: "1",
            title: "Unit 1: Atomic Structure and Crystals",
            topics: [
              { id: "1.1", title: "1.1: Atomic Structure and Bonding", contentPath: "/articles/chemistry/material-science/1_1.md" },
              { id: "1.2", title: "1.2: Crystal Structures", contentPath: "/articles/chemistry/material-science/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Material Properties",
            topics: [
              { id: "2.1", title: "2.1: Imperfections in Solids", contentPath: "/articles/chemistry/material-science/2_1.md" },
              { id: "2.2", title: "2.2: Mechanical Properties", contentPath: "/articles/chemistry/material-science/2_2.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Phase Diagrams",
            topics: [
              { id: "3.1", title: "3.1: Phase Diagrams", contentPath: "/articles/chemistry/material-science/3_1.md" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Material Science Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/material-science.md" }
            ]
          }
        ]
      },
      {
        id: "physical-chemistry",
        name: "Physical Chemistry",
        subtitle: "Thermodynamics, Kinetics & Quantum Chemistry",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Thermodynamics & Kinetics",
            topics: [
              { id: "1.1", title: "1.1: Thermodynamics Basics", contentPath: "/articles/chemistry/physical-chemistry/1_1.md" },
              { id: "1.2", title: "1.2: Reaction Kinetics", contentPath: "/articles/chemistry/physical-chemistry/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Quantum Mechanics & Spectroscopy",
            topics: [
              { id: "2.1", title: "2.1: Quantum Chemistry Basics" },
              { id: "2.2", title: "2.2: Spectroscopy Overview" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Statistical Mechanics & Applications",
            topics: [
              { id: "3.1", title: "3.1: Statistical Ensembles" },
              { id: "3.2", title: "3.2: Thermodynamic Applications" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Physical Chemistry Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/physical-chemistry.md" }
            ]
          }
        ]
      },
      {
        id: "organic-chemistry-2",
        name: "Organic Chemistry 2",
        subtitle: "Advanced organic reactions and synthesis",
        badge: "3",
        units: [
          {
            id: "1",
            title: "Unit 1: Advanced Reactions",
            topics: [
              { id: "1.1", title: "1.1: Conjugated Systems and Diels-Alder", description: "Conjugation, resonance, and cycloaddition reactions", contentPath: "/articles/chemistry/organic-chemistry-2/1_1.md" },
              { id: "1.2", title: "1.2: Aromatic Chemistry", description: "Electrophilic aromatic substitution and reactions", contentPath: "/articles/chemistry/organic-chemistry-2/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Carbonyl Chemistry",
            topics: [
              { id: "2.1", title: "2.1: Aldehydes and Ketones" },
              { id: "2.2", title: "2.2: Carboxylic Acids and Derivatives" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Synthesis and Mechanisms",
            topics: [
              { id: "3.1", title: "3.1: Retrosynthetic Analysis" }
            ]
          },
          {
            id: "mock",
            title: "Mock Exam",
            topics: [
              { id: "mock", title: "Organic Chemistry 2 Mock Exam", description: "Comprehensive mock exam for the full course", contentPath: "/articles/mock-exams/organic-chemistry-2.md" }
            ]
          }
        ]
      }
    ]
  }
};
