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
            title: "Unit 1: Vectors and Vector Spaces",
            topics: [
              { id: "1.1", title: "1.1: Introduction to Vectors" },
              { id: "1.2", title: "1.2: Vector Spaces" },
              { id: "1.3", title: "1.3: Linear Transformations" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Matrices",
            topics: [
              { id: "2.1", title: "2.1: Matrices and Matrix Operations" },
              { id: "2.2", title: "2.2: Determinants" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Eigenvalues and Eigenvectors",
            topics: [
              { id: "3.1", title: "3.1: Eigenvalues and Eigenvectors" }
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
            title: "Unit 1: Introduction and First-Order Equations",
            topics: [
              { id: "1.1", title: "1.1: Introduction to ODEs" },
              { id: "1.2", title: "1.2: First-Order Equations" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Second-Order Equations and Transforms",
            topics: [
              { id: "2.1", title: "2.1: Second-Order Linear Equations" },
              { id: "2.2", title: "2.2: Laplace Transforms" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Systems of ODEs",
            topics: [
              { id: "3.1", title: "3.1: Systems of ODEs" }
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
            title: "Unit 1: Vectors and Derivatives",
            topics: [
              { id: "1.1", title: "1.1: Vectors and Curves" },
              { id: "1.2", title: "1.2: Partial Derivatives" }
            ]
          },
          {
            id: "2",
            title: "Unit 2: Multiple Integrals",
            topics: [
              { id: "2.1", title: "2.1: Multiple Integrals" },
              { id: "2.2", title: "2.2: Line and Surface Integrals" }
            ]
          },
          {
            id: "3",
            title: "Unit 3: Vector Calculus",
            topics: [
              { id: "3.1", title: "3.1: Vector Calculus" }
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
