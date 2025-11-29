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
            id: "unit-1",
            name: "Unit 1 – Systems of Linear Equations and Matrices",
            topics: [
              { id: "1.1", title: "Systems of Linear Equations" },
              { id: "1.2", title: "Row Reduction and Echelon Forms" },
              { id: "1.3", title: "Matrix Operations" },
              { id: "1.4", title: "Matrix Inverses" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2 – Vector Spaces",
            topics: [
              { id: "2.1", title: "Vector Spaces and Subspaces" },
              { id: "2.2", title: "Linear Independence" },
              { id: "2.3", title: "Bases and Dimension" },
              { id: "2.4", title: "Coordinate Systems" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3 – Linear Transformations",
            topics: [
              { id: "3.1", title: "Introduction to Linear Transformations" },
              { id: "3.2", title: "Kernel and Range" },
              { id: "3.3", title: "Composition and Invertibility" },
            ]
          },
          {
            id: "unit-4",
            name: "Unit 4 – Determinants",
            topics: [
              { id: "4.1", title: "Determinant Calculation" },
              { id: "4.2", title: "Properties of Determinants" },
              { id: "4.3", title: "Geometric Interpretation" },
            ]
          },
          {
            id: "unit-5",
            name: "Unit 5 – Eigenvalues and Eigenvectors",
            topics: [
              { id: "5.1", title: "Eigenvalues and Eigenvectors" },
              { id: "5.2", title: "Diagonalization" },
              { id: "5.3", title: "Applications of Eigenvalues" },
            ]
          },
          {
            id: "unit-6",
            name: "Unit 6 – Orthogonality and Least Squares",
            topics: [
              { id: "6.1", title: "Inner Products and Orthogonality" },
              { id: "6.2", title: "Orthogonal Projections" },
              { id: "6.3", title: "Orthogonal Bases and Gram-Schmidt" },
              { id: "6.4", title: "QR Factorization" },
              { id: "6.5", title: "Least Squares Problems" },
            ]
          },
          {
            id: "unit-7",
            name: "Unit 7 – Symmetric Matrices and Quadratic Forms",
            topics: [
              { id: "7.1", title: "Symmetric Matrices" },
              { id: "7.2", title: "Quadratic Forms" },
              { id: "7.3", title: "Applications of Spectral Decomposition" },
            ]
          },
          {
            id: "unit-8",
            name: "Unit 8 – Additional Topics and Applications",
            topics: [
              { id: "8.1", title: "Complex Vector Spaces" },
              { id: "8.2", title: "Singular Value Decomposition" },
              { id: "8.3", title: "Linear Programming (Introductory)" },
              { id: "8.4", title: "Vector Calculus Connections" },
            ]
          }
        ]
      },
      {
        id: "odes",
        name: "Ordinary Differential Equations",
        units: [
          {
            id: "unit-1",
            name: "Unit 1 – First-Order Differential Equations",
            topics: [
              { id: "1.1", title: "Introduction and Direction Fields" },
              { id: "1.2", title: "Separable Equations" },
              { id: "1.3", title: "Linear First-Order Equations" },
              { id: "1.4", title: "Exact Equations and Substitutions" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2 – Second-Order Linear Differential Equations",
            topics: [
              { id: "2.1", title: "Homogeneous Equations with Constant Coefficients" },
              { id: "2.2", title: "Method of Undetermined Coefficients" },
              { id: "2.3", title: "Variation of Parameters" },
              { id: "2.4", title: "Applications: Mechanical and Electrical Systems" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3 – Systems of Differential Equations",
            topics: [
              { id: "3.1", title: "Systems and Matrix Form" },
              { id: "3.2", title: "Phase Plane Analysis" },
              { id: "3.3", title: "Nonlinear Systems and Linearization" },
            ]
          },
          {
            id: "unit-4",
            name: "Unit 4 – Laplace Transforms",
            topics: [
              { id: "4.1", title: "Laplace Transform Definition and Properties" },
              { id: "4.2", title: "Inverse Laplace Transforms" },
              { id: "4.3", title: "Solving IVPs with Laplace Transforms" },
              { id: "4.4", title: "Step Functions and Impulses" },
            ]
          },
          {
            id: "unit-5",
            name: "Unit 5 – Series Solutions and Special Functions",
            topics: [
              { id: "5.1", title: "Power Series Solutions" },
              { id: "5.2", title: "Frobenius Method" },
              { id: "5.3", title: "Bessel and Legendre Equations" },
            ]
          },
          {
            id: "unit-6",
            name: "Unit 6 – Numerical Methods and Modeling",
            topics: [
              { id: "6.1", title: "Euler's Method" },
              { id: "6.2", title: "Runge-Kutta Methods" },
              { id: "6.3", title: "Mathematical Modeling" },
            ]
          }
        ]
      },
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        units: [
          {
            id: "unit-1",
            name: "Unit 1 – Vectors and the Geometry of Space",
            topics: [
              { id: "1.1", title: "Vectors in Space" },
              { id: "1.2", title: "Dot Product and Cross Product" },
              { id: "1.3", title: "Lines, Planes, and Surfaces" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2 – Vector-Valued Functions",
            topics: [
              { id: "2.1", title: "Curves and Parametrizations" },
              { id: "2.2", title: "Derivatives and Integrals" },
              { id: "2.3", title: "Arc Length and Curvature" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3 – Partial Derivatives",
            topics: [
              { id: "3.1", title: "Functions of Several Variables" },
              { id: "3.2", title: "Partial Derivatives" },
              { id: "3.3", title: "Chain Rule and Directional Derivatives" },
              { id: "3.4", title: "Optimization and Lagrange Multipliers" },
            ]
          },
          {
            id: "unit-4",
            name: "Unit 4 – Multiple Integrals",
            topics: [
              { id: "4.1", title: "Double Integrals" },
              { id: "4.2", title: "Double Integrals in Polar Coordinates" },
              { id: "4.3", title: "Triple Integrals" },
              { id: "4.4", title: "Cylindrical and Spherical Coordinates" },
            ]
          },
          {
            id: "unit-5",
            name: "Unit 5 – Vector Calculus",
            topics: [
              { id: "5.1", title: "Vector Fields" },
              { id: "5.2", title: "Line Integrals" },
              { id: "5.3", title: "Curl and Divergence" },
              { id: "5.4", title: "Surface Integrals and Major Theorems" },
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
            id: "unit-1",
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Kinematics" },
              { id: "1.2", title: "Newton's Laws" },
              { id: "1.3", title: "Energy and Momentum" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Electric Fields and Forces" },
              { id: "2.2", title: "Magnetic Fields" },
              { id: "2.3", title: "Electromagnetic Induction" },
            ]
          }
        ]
      },
      {
        id: "electromagnetism",
        name: "Electromagnetism",
        units: [
          {
            id: "unit-1",
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Maxwell's Equations" },
              { id: "1.2", title: "Electromagnetic Waves" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Electrostatics" },
              { id: "2.2", title: "Magnetostatics" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Advanced Topics" },
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
            id: "unit-1",
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Structure and Bonding" },
              { id: "1.2", title: "Alkanes and Cycloalkanes" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Stereochemistry" },
              { id: "2.2", title: "Substitution and Elimination" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Aromatic Compounds" },
              { id: "3.2", title: "Carbonyl Chemistry" },
            ]
          }
        ]
      },
      {
        id: "material-science",
        name: "Introduction to Material Science",
        units: [
          {
            id: "unit-1",
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Atomic Structure and Bonding" },
              { id: "1.2", title: "Crystal Structures" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Imperfections in Solids" },
              { id: "2.2", title: "Mechanical Properties" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Phase Diagrams" },
            ]
          }
        ]
      }
    ]
  }
};
