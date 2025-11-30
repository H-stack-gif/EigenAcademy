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
              { id: "2.1", title: "2.1: Vector Spaces and Subspaces", description: "Abstract vector spaces, axioms, and identifying subspaces within vector spaces" },
              { id: "2.2", title: "2.2: Linear Independence", description: "Determining when sets of vectors are linearly independent or dependent using linear combinations" },
              { id: "2.3", title: "2.3: Bases and Dimension", description: "Finding bases for vector spaces and subspaces and computing their dimensions" },
              { id: "2.4", title: "2.4: Coordinate Systems", description: "Representing vectors in different coordinate systems using basis transformations and change of basis matrices" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Linear Transformations",
            topics: [
              { id: "3.1", title: "3.1: Introduction to Linear Transformations", description: "Defining and understanding linear transformations between vector spaces with matrix representations" },
              { id: "3.2", title: "3.2: Kernel and Range", description: "Finding the kernel (null space) and range (column space) of linear transformations and their properties" },
              { id: "3.3", title: "3.3: Composition and Invertibility", description: "Composing linear transformations and determining when a transformation is invertible" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Determinants",
            topics: [
              { id: "4.1", title: "4.1: Determinant Calculation", description: "Computing determinants using cofactor expansion, row reduction, and special matrix forms" },
              { id: "4.2", title: "4.2: Properties of Determinants", description: "Exploring determinant properties including multiplicativity, row operations, and transpose relationships" },
              { id: "4.3", title: "4.3: Geometric Interpretation", description: "Understanding determinants as volume scaling factors and their geometric significance in transformations" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Eigenvalues and Eigenvectors",
            topics: [
              { id: "5.1", title: "5.1: Eigenvalues and Eigenvectors", description: "Finding eigenvalues and eigenvectors of matrices using characteristic polynomials and eigenspaces" },
              { id: "5.2", title: "5.2: Diagonalization", description: "Diagonalizing matrices when possible and understanding the conditions for diagonalizability" },
              { id: "5.3", title: "5.3: Applications of Eigenvalues", description: "Applying eigenvalue theory to dynamical systems, differential equations, and data analysis problems" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Orthogonality and Least Squares",
            topics: [
              { id: "6.1", title: "6.1: Inner Products and Orthogonality", description: "Defining inner products, norms, and angles between vectors with orthogonality conditions" },
              { id: "6.2", title: "6.2: Orthogonal Projections", description: "Projecting vectors onto subspaces and finding closest approximations using orthogonal projections" },
              { id: "6.3", title: "6.3: Orthogonal Bases and Gram-Schmidt", description: "Constructing orthonormal bases from arbitrary bases using the Gram-Schmidt orthogonalization process" },
              { id: "6.4", title: "6.4: QR Factorization", description: "Decomposing matrices into orthogonal and upper triangular factors for computational applications" },
              { id: "6.5", title: "6.5: Least Squares Problems", description: "Solving overdetermined systems and regression problems using least squares minimization techniques" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Symmetric Matrices and Quadratic Forms",
            topics: [
              { id: "7.1", title: "7.1: Symmetric Matrices", description: "Properties of symmetric matrices including real eigenvalues and orthogonal eigenvector sets" },
              { id: "7.2", title: "7.2: Quadratic Forms", description: "Analyzing quadratic forms, their matrix representations, and classification as positive or negative definite" },
              { id: "7.3", title: "7.3: Applications of Spectral Decomposition", description: "Using spectral theorem for symmetric matrices in optimization, geometry, and principal component analysis" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Additional Topics and Applications",
            topics: [
              { id: "8.1", title: "8.1: Complex Vector Spaces", description: "Extending linear algebra concepts to complex vector spaces with complex eigenvalues and inner products" },
              { id: "8.2", title: "8.2: Singular Value Decomposition", description: "SVD factorization of matrices for data compression, dimensionality reduction, and numerical stability" },
              { id: "8.3", title: "8.3: Linear Programming (Introductory)", description: "Introduction to optimization problems with linear constraints using simplex method fundamentals" },
              { id: "8.4", title: "8.4: Vector Calculus Connections", description: "Connecting linear algebra to multivariable calculus through gradients, Jacobians, and directional derivatives" }
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
              { id: "1.1", title: "1.1: Introduction and Direction Fields", description: "Introducing differential equations with graphical solution methods using direction fields and slope fields" },
              { id: "1.2", title: "1.2: Separable Equations", description: "Solving first-order differential equations by separating variables and integrating both sides" },
              { id: "1.3", title: "1.3: Linear First-Order Equations", description: "Solving linear first-order ODEs using integrating factors and analyzing their solutions" },
              { id: "1.4", title: "1.4: Exact Equations and Substitutions", description: "Identifying and solving exact differential equations and using substitution methods for nonlinear equations" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Second-Order Linear Differential Equations",
            topics: [
              { id: "2.1", title: "2.1: Homogeneous Equations with Constant Coefficients", description: "Solving homogeneous second-order linear ODEs using characteristic equations and exponential solutions" },
              { id: "2.2", title: "2.2: Method of Undetermined Coefficients", description: "Finding particular solutions to nonhomogeneous equations by guessing solution forms based on forcing functions" },
              { id: "2.3", title: "2.3: Variation of Parameters", description: "General method for finding particular solutions to nonhomogeneous linear ODEs using parameter variation" },
              { id: "2.4", title: "2.4: Applications: Mechanical and Electrical Systems", description: "Modeling spring-mass systems, RLC circuits, and damped oscillations using second-order differential equations" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Systems of Differential Equations",
            topics: [
              { id: "3.1", title: "3.1: Systems and Matrix Form", description: "Representing systems of first-order ODEs in matrix form and solving using eigenvalues and eigenvectors" },
              { id: "3.2", title: "3.2: Phase Plane Analysis", description: "Visualizing solution trajectories in the phase plane and classifying equilibrium points of linear systems" },
              { id: "3.3", title: "3.3: Nonlinear Systems and Linearization", description: "Analyzing nonlinear systems by linearizing near equilibrium points and studying stability behavior" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Laplace Transforms",
            topics: [
              { id: "4.1", title: "4.1: Laplace Transform Definition and Properties", description: "Defining the Laplace transform and exploring linearity, shifting, and differentiation properties" },
              { id: "4.2", title: "4.2: Inverse Laplace Transforms", description: "Computing inverse Laplace transforms using partial fractions and transform tables" },
              { id: "4.3", title: "4.3: Solving IVPs with Laplace Transforms", description: "Applying Laplace transforms to solve initial value problems for linear differential equations" },
              { id: "4.4", title: "4.4: Step Functions and Impulses", description: "Modeling discontinuous forcing functions using unit step functions and Dirac delta impulses" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Series Solutions and Special Functions",
            topics: [
              { id: "5.1", title: "5.1: Power Series Solutions", description: "Finding series solutions to differential equations by assuming power series forms and matching coefficients" },
              { id: "5.2", title: "5.2: Frobenius Method", description: "Extending power series methods to equations with singular points using the Frobenius technique" },
              { id: "5.3", title: "5.3: Bessel and Legendre Equations", description: "Studying special functions arising from Bessel and Legendre differential equations in physics and engineering" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Numerical Methods and Modeling",
            topics: [
              { id: "6.1", title: "6.1: Euler's Method", description: "Approximating solutions to differential equations numerically using simple Euler's method with error analysis" },
              { id: "6.2", title: "6.2: Runge-Kutta Methods", description: "Higher-order numerical methods including RK2 and RK4 for improved accuracy in solving ODEs" },
              { id: "6.3", title: "6.3: Mathematical Modeling", description: "Building and analyzing mathematical models for real-world phenomena using differential equations" }
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
              { id: "1.1", title: "1.1: Vectors in Space", description: "Three-dimensional vectors, vector operations, magnitude, and unit vectors in Cartesian coordinates" },
              { id: "1.2", title: "1.2: Dot Product and Cross Product", description: "Computing dot products for projections and angles, and cross products for orthogonal vectors and areas" },
              { id: "1.3", title: "1.3: Lines, Planes, and Surfaces", description: "Equations of lines and planes in 3D space, and visualizing quadric surfaces and level sets" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Vector-Valued Functions",
            topics: [
              { id: "2.1", title: "2.1: Curves and Parametrizations", description: "Parametric curves in space, position vectors, and representing motion along curves" },
              { id: "2.2", title: "2.2: Derivatives and Integrals", description: "Differentiating and integrating vector-valued functions to find velocity, acceleration, and displacement" },
              { id: "2.3", title: "2.3: Arc Length and Curvature", description: "Computing arc length of space curves and measuring curvature using tangent and normal vectors" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Partial Derivatives",
            topics: [
              { id: "3.1", title: "3.1: Functions of Several Variables", description: "Multivariable functions, domains, graphs, level curves, and contour plots for visualization" },
              { id: "3.2", title: "3.2: Partial Derivatives", description: "Computing partial derivatives with respect to each variable and interpreting their geometric meaning" },
              { id: "3.3", title: "3.3: Chain Rule and Directional Derivatives", description: "Multivariable chain rule for composite functions and computing directional derivatives using gradients" },
              { id: "3.4", title: "3.4: Optimization and Lagrange Multipliers", description: "Finding extrema of multivariable functions using critical points and constrained optimization with Lagrange multipliers" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Multiple Integrals",
            topics: [
              { id: "4.1", title: "4.1: Double Integrals", description: "Evaluating double integrals over rectangular and general regions to compute volumes and areas" },
              { id: "4.2", title: "4.2: Double Integrals in Polar Coordinates", description: "Converting to polar coordinates for circular and radial symmetry in double integration problems" },
              { id: "4.3", title: "4.3: Triple Integrals", description: "Computing triple integrals over three-dimensional regions for volume, mass, and center of mass calculations" },
              { id: "4.4", title: "4.4: Cylindrical and Spherical Coordinates", description: "Using cylindrical and spherical coordinate systems to simplify triple integrals with symmetry" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Vector Calculus",
            topics: [
              { id: "5.1", title: "5.1: Vector Fields", description: "Understanding vector fields, conservative fields, and potential functions in two and three dimensions" },
              { id: "5.2", title: "5.2: Line Integrals", description: "Computing line integrals of scalar and vector fields along curves for work and circulation" },
              { id: "5.3", title: "5.3: Curl and Divergence", description: "Calculating curl and divergence of vector fields and interpreting their physical meanings" },
              { id: "5.4", title: "5.4: Surface Integrals and Major Theorems", description: "Surface integrals and fundamental theorems including Green's, Stokes', and Divergence Theorems" }
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
        id: "foundational-physics",
        name: "Foundational Physics",
        subtitle: "Classical Mechanics & Electricity & Magnetism",
        units: [
          {
            id: "1",
            title: "Unit 1: Classical Mechanics",
            topics: [
              { id: "1.1", title: "1.1: Kinematics" },
              { id: "1.2", title: "1.2: Newton's Laws" },
              { id: "1.3", title: "1.3: Energy and Momentum" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Electricity & Magnetism",
            topics: [
              { id: "2.1", title: "2.1: Electric Fields and Forces" },
              { id: "2.2", title: "2.2: Magnetic Fields" },
              { id: "2.3", title: "2.3: Electromagnetic Induction" }
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
              { id: "1.1", title: "1.1: Maxwell's Equations" },
              { id: "1.2", title: "1.2: Electromagnetic Waves" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Statics",
            topics: [
              { id: "2.1", title: "2.1: Electrostatics" },
              { id: "2.2", title: "2.2: Magnetostatics" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Advanced Topics",
            topics: [
              { id: "3.1", title: "3.1: Advanced Topics" }
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
        subtitle: "Organic Chemistry 1 & 2",
        units: [
          {
            id: "1",
            title: "Unit 1: Structure and Basic Compounds",
            topics: [
              { id: "1.1", title: "1.1: Structure and Bonding" },
              { id: "1.2", title: "1.2: Alkanes and Cycloalkanes" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Stereochemistry and Reactions",
            topics: [
              { id: "2.1", title: "2.1: Stereochemistry" },
              { id: "2.2", title: "2.2: Substitution and Elimination" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Advanced Organic Chemistry",
            topics: [
              { id: "3.1", title: "3.1: Aromatic Compounds" },
              { id: "3.2", title: "3.2: Carbonyl Chemistry" }
            ]
          }
        ]
      },
      {
        id: "material-science",
        name: "Introduction to Material Science",
        units: [
          {
            id: "1",
            title: "Unit 1: Atomic Structure and Crystals",
            topics: [
              { id: "1.1", title: "1.1: Atomic Structure and Bonding" },
              { id: "1.2", title: "1.2: Crystal Structures" }
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
