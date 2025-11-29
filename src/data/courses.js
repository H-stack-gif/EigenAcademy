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
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Introduction to Vectors" },
              { id: "1.2", title: "Vector Spaces" },
              { id: "1.3", title: "Linear Transformations" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Matrices and Matrix Operations" },
              { id: "2.2", title: "Determinants" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Eigenvalues and Eigenvectors" },
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
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Introduction to ODEs" },
              { id: "1.2", title: "First-Order Equations" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Second-Order Linear Equations" },
              { id: "2.2", title: "Laplace Transforms" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Systems of ODEs" },
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
            name: "Unit 1",
            topics: [
              { id: "1.1", title: "Vectors and Curves" },
              { id: "1.2", title: "Partial Derivatives" },
            ]
          },
          {
            id: "unit-2",
            name: "Unit 2",
            topics: [
              { id: "2.1", title: "Multiple Integrals" },
              { id: "2.2", title: "Line and Surface Integrals" },
            ]
          },
          {
            id: "unit-3",
            name: "Unit 3",
            topics: [
              { id: "3.1", title: "Vector Calculus" },
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
