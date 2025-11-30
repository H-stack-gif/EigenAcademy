import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error('Uncaught error in component tree:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-root">
          <div className="error-boundary-card">
            <h2>Something went wrong</h2>
            <p>We hit an unexpected error while rendering this page. You can try refreshing — if the problem continues, please paste any console errors here and I’ll investigate.</p>
            <details style={{ whiteSpace: 'pre-wrap', marginTop: 10 }}>
              <summary>Show error details</summary>
              {this.state.error && <div className="error-boundary-stack">{String(this.state.error)}</div>}
              {this.state.info?.componentStack && (
                <div className="error-boundary-stack">{this.state.info.componentStack}</div>
              )}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
