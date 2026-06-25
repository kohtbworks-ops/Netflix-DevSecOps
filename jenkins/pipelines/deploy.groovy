// Deploy stage - apply Kubernetes manifests
sh """
    sed -i 's|IMAGE_TAG|${IMAGE_TAG}|g' k8s/deployment.yaml
    kubectl apply -f k8s/namespace.yaml
    kubectl apply -f k8s/configmap.yaml
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    kubectl apply -f k8s/ingress.yaml
    kubectl apply -f k8s/hpa.yaml
    kubectl rollout status deployment/${IMAGE_NAME} -n netflix
"""
