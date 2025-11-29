export const courses = {
  math: {
    title: "Mathematics",
    color: "#FF6B6B",
    courses: [
      {
        id: "linear-algebra",
        name: "Linear Algebra",
        units: [
          { id: "1.1", title: "Unit 1.1: Introduction to Vectors" },
          { id: "1.2", title: "Unit 1.2: Vector Spaces" },
          { id: "1.3", title: "Unit 1.3: Linear Transformations" },
          { id: "2.1", title: "Unit 2.1: Matrices and Matrix Operations" },
          { id: "2.2", title: "Unit 2.2: Determinants" },
          { id: "3.1", title: "Unit 3.1: Eigenvalues and Eigenvectors" },
        ]
      },
      {
        id: "odes",
        name: "Ordinary Differential Equations",
        units: [
          { id: "1.1", title: "Unit 1.1: Introduction to ODEs" },
          { id: "1.2", title: "Unit 1.2: First-Order Equations" },
          { id: "2.1", title: "Unit 2.1: Second-Order Linear Equations" },
          { id: "2.2", title: "Unit 2.2: Laplace Transforms" },
          { id: "3.1", title: "Unit 3.1: Systems of ODEs" },
        ]
      },
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        units: [
          { id: "1.1", title: "Unit 1.1: Vectors and Curves" },
          { id: "1.2", title: "Unit 1.2: Partial Derivatives" },
          { id: "2.1", title: "Unit 2.1: Multiple Integrals" },
          { id: "2.2", title: "Unit 2.2: Line and Surface Integrals" },
          { id: "3.1", title: "Unit 3.1: Vector Calculus" },
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
          { id: "1.1", title: "Unit 1.1: Kinematics" },
          { id: "1.2", title: "Unit 1.2: Newton's Laws" },
          { id: "1.3", title: "Unit 1.3: Energy and Momentum" },
          { id: "2.1", title: "Unit 2.1: Electric Fields and Forces" },
          { id: "2.2", title: "Unit 2.2: Magnetic Fields" },
          { id: "2.3", title: "Unit 2.3: Electromagnetic Induction" },
        ]
      },
      {
        id: "electromagnetism",
        name: "Electromagnetism",
        units: [
          { id: "1.1", title: "Unit 1.1: Maxwell's Equations" },
          { id: "1.2", title: "Unit 1.2: Electromagnetic Waves" },
          { id: "2.1", title: "Unit 2.1: Electrostatics" },
          { id: "2.2", title: "Unit 2.2: Magnetostatics" },
          { id: "3.1", title: "Unit 3.1: Advanced Topics" },
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
          { id: "1.1", title: "Unit 1.1: Structure and Bonding" },
          { id: "1.2", title: "Unit 1.2: Alkanes and Cycloalkanes" },
          { id: "2.1", title: "Unit 2.1: Stereochemistry" },
          { id: "2.2", title: "Unit 2.2: Substitution and Elimination" },
          { id: "3.1", title: "Unit 3.1: Aromatic Compounds" },
          { id: "3.2", title: "Unit 3.2: Carbonyl Chemistry" },
        ]
      },
      {
        id: "material-science",
        name: "Introduction to Material Science",
        units: [
          { id: "1.1", title: "Unit 1.1: Atomic Structure and Bonding" },
          { id: "1.2", title: "Unit 1.2: Crystal Structures" },
          { id: "2.1", title: "Unit 2.1: Imperfections in Solids" },
          { id: "2.2", title: "Unit 2.2: Mechanical Properties" },
          { id: "3.1", title: "Unit 3.1: Phase Diagrams" },
        ]
      }
    ]
  }
};
