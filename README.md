# DevSecOps Netflix Clone – CI/CD with Monitoring

A production-grade DevSecOps pipeline built around a Netflix clone application.

## Stack

| Layer       | Tools                              |
|-------------|------------------------------------|
| App         | React / Next.js                    |
| CI/CD       | Jenkins, Docker                    |
| Security    | Trivy, SonarQube, OWASP            |
| Deployment  | Kubernetes (K8s)                   |
| Monitoring  | Prometheus, Grafana                |

## Pipeline Stages

1. **Checkout** – pull source from Git
2. **Build** – Docker multi-stage build
3. **SonarQube Analysis** – static code analysis
4. **Quality Gate** – enforce code quality thresholds
5. **Security Scan** – Trivy (container CVEs) + OWASP (dependencies)
6. **Push** – push image to Docker registry
7. **Deploy** – apply Kubernetes manifests

## Local Development

```bash
docker-compose up
```

- App: http://localhost:3000
- SonarQube: http://localhost:9000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001

## Directory Structure

```
netflix-devsecops/
├── app/          # Application code + Dockerfile
├── jenkins/      # Jenkinsfile + pipeline stages
├── security/     # Trivy, SonarQube, OWASP configs
├── k8s/          # Kubernetes manifests
└── monitoring/   # Prometheus + Grafana
```
