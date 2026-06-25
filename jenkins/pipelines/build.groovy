// Build stage - Docker multi-stage build
sh """
    docker build \
      -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} \
      -f app/Dockerfile ./app
"""
