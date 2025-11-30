export const courses = {
  math: {
    title: "Mathematics",
    color: "#FF6B6B",
    courses: [
      {
        id: "linear-algebra",
        name: "Linear Algebra",
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
          }
        ]
      },
      {
        id: "odes",
        name: "Ordinary Differential Equations",
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
          }
        ]
      },
      {
        id: "partial-differential-equations",
        name: "Partial Differential Equations",
        units: [
          {
            id: "1",
            title: "Unit 1: Introduction to PDEs",
            topics: [
              { id: "1.1", title: "1.1: First-order PDEs", description: "Introduction to first-order PDEs and basic solution methods", contentPath: "/articles/partial-differential-equations/1_1.md" }
            ]
          }
        ]
      },
      {
        id: "complex-analysis",
        name: "Complex Analysis",
        units: [
          {
            id: "1",
            title: "Unit 1: Complex Numbers and Functions",
            topics: [
              { id: "1.1", title: "1.1: Complex Numbers and Geometry", description: "Complex arithmetic, polar form, and geometric interpretations", contentPath: "/articles/complex-analysis/1_1.md" }
            ]
          }
        ]
      },
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        units: [
          {
            id: "1",
            title: "Unit 1: Vectors and the Geometry of Space",
            topics: [
              { id: "1.1", title: "1.1: Vectors in Space", description: "Three-dimensional vectors, vector operations, magnitude, and unit vectors in Cartesian coordinates", contentPath: "/articles/multivariable-calculus/1_1.md" },
              { id: "1.2", title: "1.2: Dot Product and Cross Product", description: "Computing dot products for projections and angles, and cross products for orthogonal vectors and areas", contentPath: "/articles/multivariable-calculus/1_2.md" },
              { id: "1.3", title: "1.3: Lines, Planes, and Surfaces", description: "Equations of lines and planes in 3D space, and visualizing quadric surfaces and level sets", contentPath: "/articles/multivariable-calculus/1_3.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Vector-Valued Functions",
            topics: [
              { id: "2.1", title: "2.1: Curves and Parametrizations", description: "Parametric curves in space, position vectors, and representing motion along curves", contentPath: "/articles/multivariable-calculus/2_1.md" },
              { id: "2.2", title: "2.2: Derivatives and Integrals", description: "Differentiating and integrating vector-valued functions to find velocity, acceleration, and displacement", contentPath: "/articles/multivariable-calculus/2_2.md" },
              { id: "2.3", title: "2.3: Arc Length and Curvature", description: "Computing arc length of space curves and measuring curvature using tangent and normal vectors", contentPath: "/articles/multivariable-calculus/2_3.md" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Partial Derivatives",
            topics: [
              { id: "3.1", title: "3.1: Functions of Several Variables", description: "Multivariable functions, domains, graphs, level curves, and contour plots for visualization", contentPath: "/articles/multivariable-calculus/3_1.md" },
              { id: "3.2", title: "3.2: Partial Derivatives", description: "Computing partial derivatives with respect to each variable and interpreting their geometric meaning", contentPath: "/articles/multivariable-calculus/3_2.md" },
              { id: "3.3", title: "3.3: Chain Rule and Directional Derivatives", description: "Multivariable chain rule for composite functions and computing directional derivatives using gradients", contentPath: "/articles/multivariable-calculus/3_3.md" },
              { id: "3.4", title: "3.4: Optimization and Lagrange Multipliers", description: "Finding extrema of multivariable functions using critical points and constrained optimization with Lagrange multipliers", contentPath: "/articles/multivariable-calculus/3_4.md" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Multiple Integrals",
            topics: [
              { id: "4.1", title: "4.1: Double Integrals", description: "Evaluating double integrals over rectangular and general regions to compute volumes and areas", contentPath: "/articles/multivariable-calculus/4_1.md" },
              { id: "4.2", title: "4.2: Double Integrals in Polar Coordinates", description: "Converting to polar coordinates for circular and radial symmetry in double integration problems", contentPath: "/articles/multivariable-calculus/4_2.md" },
              { id: "4.3", title: "4.3: Triple Integrals", description: "Computing triple integrals over three-dimensional regions for volume, mass, and center of mass calculations", contentPath: "/articles/multivariable-calculus/4_3.md" },
              { id: "4.4", title: "4.4: Cylindrical and Spherical Coordinates", description: "Using cylindrical and spherical coordinate systems to simplify triple integrals with symmetry", contentPath: "/articles/multivariable-calculus/4_4.md" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Vector Calculus",
            topics: [
              { id: "5.1", title: "5.1: Vector Fields", description: "Understanding vector fields, conservative fields, and potential functions in two and three dimensions", contentPath: "/articles/multivariable-calculus/5_1.md" },
              { id: "5.2", title: "5.2: Line Integrals", description: "Computing line integrals of scalar and vector fields along curves for work and circulation", contentPath: "/articles/multivariable-calculus/5_2.md" },
              { id: "5.3", title: "5.3: Curl and Divergence", description: "Calculating curl and divergence of vector fields and interpreting their physical meanings", contentPath: "/articles/multivariable-calculus/5_3.md" },
              { id: "5.4", title: "5.4: Surface Integrals and Major Theorems", description: "Surface integrals and fundamental theorems including Green's, Stokes', and Divergence Theorems", contentPath: "/articles/multivariable-calculus/5_4.md" }
            ]
          }
        ]
      }
    ]
  },
  physics: {
    title: "Physics",
    color: "#3A7CA5",
    courses: [
      {
        id: "classical-mechanics",
        name: "Classical Mechanics",
        subtitle: "Kinematics, Dynamics, Energy & Momentum",
        units: [
          {
            id: "1",
            title: "Unit 1: Kinematics and Dynamics",
            topics: [
              { id: "1.1", title: "1.1: Kinematics", description: "Motion in one and multiple dimensions; velocity and acceleration", contentPath: "/articles/physics/classical-mechanics/1_1.md" },
              { id: "1.2", title: "1.2: Newton's Laws", description: "Forces, free body diagrams, and applications of Newton's laws", contentPath: "/articles/physics/classical-mechanics/1_2.md" },
              { id: "1.3", title: "1.3: Energy and Momentum", description: "Work, energy conservation, and momentum & collisions", contentPath: "/articles/physics/classical-mechanics/1_3.md" }
            ]
          }
        ]
      },
      {
        id: "thermodynamics-statmech",
        name: "Thermodynamics & Statistical Mechanics",
        subtitle: "Thermodynamics and Foundations of Statistical Mechanics",
        units: [
          {
            id: "1",
            title: "Unit 1: Thermodynamics Basics",
            topics: [
              { id: "1.1", title: "1.1: Laws of Thermodynamics", description: "Zeroth, first, second laws and thermodynamic potentials", contentPath: "/articles/physics/thermodynamics-statmech/1_1.md" }
            ]
          }
        ]
      },
      {
        id: "atomic-molecular",
        name: "Atomic & Molecular Physics",
        subtitle: "Quantum basics for atoms and molecules",
        units: [
          {
            id: "1",
            title: "Unit 1: Atomic Structure",
            topics: [
              { id: "1.1", title: "1.1: Atomic Models", description: "Bohr model, quantum numbers, and spectroscopy basics", contentPath: "/articles/physics/atomic-molecular/1_1.md" }
            ]
          }
        ]
      },
      {
        id: "electromagnetism",
        name: "Electromagnetism",
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
        id: "physical-chemistry",
        name: "Physical Chemistry",
        subtitle: "Thermodynamics, Kinetics & Quantum Chemistry",
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
          }
        ]
      },
      {
        id: "solid-state-chemistry",
        name: "Solid State Chemistry",
        subtitle: "Crystal structures, bonding, and solid properties",
        units: [
          {
            id: "1",
            title: "Unit 1: Crystal and Solid Structure",
            topics: [
              { id: "1.1", title: "1.1: Crystal Lattices and Unit Cells", description: "Bravais lattices, unit cell types and basic diffraction concepts", contentPath: "/articles/chemistry/solid-state-chemistry/1_1.md" },
              { id: "1.2", title: "1.2: Bonding and Band Theory", description: "Overview of bonding in solids and basic band theory", contentPath: "/articles/chemistry/solid-state-chemistry/1_2.md" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Material Properties",
            topics: [
              { id: "2.1", title: "2.1: Imperfections in Solids" },
              { id: "2.2", title: "2.2: Mechanical Properties" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Phase Diagrams",
            topics: [
              { id: "3.1", title: "3.1: Phase Diagrams" }
            ]
          }
        ]
      }
    ]
  }
};
