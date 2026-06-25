// Security scan stage - Trivy container scan + OWASP dependency check

// Trivy: scan built image for CVEs
sh """
    trivy image \
      --config security/trivy/trivy.yaml \
      --exit-code 1 \
      --severity HIGH,CRITICAL \
      ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
"""

// OWASP Dependency-Check
sh """
    dependency-check \
      --project "${IMAGE_NAME}" \
      --scan ./app \
      --suppression security/owasp/dependency-check.xml \
      --out security/owasp/owasp-report \
      --format HTML
"""
