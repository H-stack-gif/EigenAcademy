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
              { id: "1.1", title: "1.1: Systems of Linear Equations" },
              { id: "1.2", title: "1.2: Row Reduction and Echelon Forms" },
              { id: "1.3", title: "1.3: Matrix Operations" },
              { id: "1.4", title: "1.4: Matrix Inverses" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Vector Spaces",
            topics: [
              { id: "2.1", title: "2.1: Vector Spaces and Subspaces" },
              { id: "2.2", title: "2.2: Linear Independence" },
              { id: "2.3", title: "2.3: Bases and Dimension" },
              { id: "2.4", title: "2.4: Coordinate Systems" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Linear Transformations",
            topics: [
              { id: "3.1", title: "3.1: Introduction to Linear Transformations" },
              { id: "3.2", title: "3.2: Kernel and Range" },
              { id: "3.3", title: "3.3: Composition and Invertibility" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Determinants",
            topics: [
              { id: "4.1", title: "4.1: Determinant Calculation" },
              { id: "4.2", title: "4.2: Properties of Determinants" },
              { id: "4.3", title: "4.3: Geometric Interpretation" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Eigenvalues and Eigenvectors",
            topics: [
              { id: "5.1", title: "5.1: Eigenvalues and Eigenvectors" },
              { id: "5.2", title: "5.2: Diagonalization" },
              { id: "5.3", title: "5.3: Applications of Eigenvalues" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Orthogonality and Least Squares",
            topics: [
              { id: "6.1", title: "6.1: Inner Products and Orthogonality" },
              { id: "6.2", title: "6.2: Orthogonal Projections" },
              { id: "6.3", title: "6.3: Orthogonal Bases and Gram-Schmidt" },
              { id: "6.4", title: "6.4: QR Factorization" },
              { id: "6.5", title: "6.5: Least Squares Problems" }
            ]
          },
          {
            id: "7",
            title: "Unit 7: Symmetric Matrices and Quadratic Forms",
            topics: [
              { id: "7.1", title: "7.1: Symmetric Matrices" },
              { id: "7.2", title: "7.2: Quadratic Forms" },
              { id: "7.3", title: "7.3: Applications of Spectral Decomposition" }
            ]
          },
          {
            id: "8",
            title: "Unit 8: Additional Topics and Applications",
            topics: [
              { id: "8.1", title: "8.1: Complex Vector Spaces" },
              { id: "8.2", title: "8.2: Singular Value Decomposition" },
              { id: "8.3", title: "8.3: Linear Programming (Introductory)" },
              { id: "8.4", title: "8.4: Vector Calculus Connections" }
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
              { id: "1.1", title: "1.1: Introduction and Direction Fields" },
              { id: "1.2", title: "1.2: Separable Equations" },
              { id: "1.3", title: "1.3: Linear First-Order Equations" },
              { id: "1.4", title: "1.4: Exact Equations and Substitutions" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Second-Order Linear Differential Equations",
            topics: [
              { id: "2.1", title: "2.1: Homogeneous Equations with Constant Coefficients" },
              { id: "2.2", title: "2.2: Method of Undetermined Coefficients" },
              { id: "2.3", title: "2.3: Variation of Parameters" },
              { id: "2.4", title: "2.4: Applications: Mechanical and Electrical Systems" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Systems of Differential Equations",
            topics: [
              { id: "3.1", title: "3.1: Systems and Matrix Form" },
              { id: "3.2", title: "3.2: Phase Plane Analysis" },
              { id: "3.3", title: "3.3: Nonlinear Systems and Linearization" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Laplace Transforms",
            topics: [
              { id: "4.1", title: "4.1: Laplace Transform Definition and Properties" },
              { id: "4.2", title: "4.2: Inverse Laplace Transforms" },
              { id: "4.3", title: "4.3: Solving IVPs with Laplace Transforms" },
              { id: "4.4", title: "4.4: Step Functions and Impulses" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Series Solutions and Special Functions",
            topics: [
              { id: "5.1", title: "5.1: Power Series Solutions" },
              { id: "5.2", title: "5.2: Frobenius Method" },
              { id: "5.3", title: "5.3: Bessel and Legendre Equations" }
            ]
          },
          {
            id: "6",
            title: "Unit 6: Numerical Methods and Modeling",
            topics: [
              { id: "6.1", title: "6.1: Euler's Method" },
              { id: "6.2", title: "6.2: Runge-Kutta Methods" },
              { id: "6.3", title: "6.3: Mathematical Modeling" }
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
              { id: "1.1", title: "1.1: Vectors in Space" },
              { id: "1.2", title: "1.2: Dot Product and Cross Product" },
              { id: "1.3", title: "1.3: Lines, Planes, and Surfaces" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Vector-Valued Functions",
            topics: [
              { id: "2.1", title: "2.1: Curves and Parametrizations" },
              { id: "2.2", title: "2.2: Derivatives and Integrals" },
              { id: "2.3", title: "2.3: Arc Length and Curvature" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Partial Derivatives",
            topics: [
              { id: "3.1", title: "3.1: Functions of Several Variables" },
              { id: "3.2", title: "3.2: Partial Derivatives" },
              { id: "3.3", title: "3.3: Chain Rule and Directional Derivatives" },
              { id: "3.4", title: "3.4: Optimization and Lagrange Multipliers" }
            ]
          },
          {
            id: "4",
            title: "Unit 4: Multiple Integrals",
            topics: [
              { id: "4.1", title: "4.1: Double Integrals" },
              { id: "4.2", title: "4.2: Double Integrals in Polar Coordinates" },
              { id: "4.3", title: "4.3: Triple Integrals" },
              { id: "4.4", title: "4.4: Cylindrical and Spherical Coordinates" }
            ]
          },
          {
            id: "5",
            title: "Unit 5: Vector Calculus",
            topics: [
              { id: "5.1", title: "5.1: Vector Fields" },
              { id: "5.2", title: "5.2: Line Integrals" },
              { id: "5.3", title: "5.3: Curl and Divergence" },
              { id: "5.4", title: "5.4: Surface Integrals and Major Theorems" }
            ]
          }
        ]
      }
    ]
  },
  physics: {
    title: "Physics",
    color: "#4ECDC4",
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
    color: "#95E1D3",
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
