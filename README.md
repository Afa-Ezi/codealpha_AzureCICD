# CodeAlpha DevOps Internship — Task 1: CI/CD Pipeline using Azure

## Overview
An end-to-end CI/CD pipeline built with Azure DevOps that automatically builds, containerizes,
and deploys a Node/Express application every time code is pushed to GitHub — no manual steps
required after setup.

## What was built
- Containerized a Node/Express app with Docker
- Set up an Azure Container Registry (ACR) to store the built image
- Provisioned an Azure App Service (Web App for Containers) to host the deployed app
- Built an Azure Pipelines definition (`azure-pipelines.yml`) that builds, containerizes,
  and pushes the app image (the pipeline run observed in Azure DevOps shows this as a single
  "Build and push stage" containing the Build job)
- Configured the pipeline trigger on the `main` branch, so any push automatically
  kicks off a full build → deploy cycle

## Repo contents
- `Dockerfile` — containerizes the Node/Express app
- `azure-pipelines.yml` — Azure Pipelines definition (Build and push stage)
- `index.js`, `package.json` — sample Node/Express app

## Pipeline flow

```
git push origin main
      │
      ▼
Azure Pipelines triggered
      │
      ▼
Build and push stage → Docker image built and pushed to ACR
      │
      ▼
App Service pulls the updated image from ACR and serves it
      │
      ▼
App live on *.azurewebsites.net
```

## Verified results
- Azure DevOps pipeline `Afa-Ezi.codealpha_AzureCICD` (project `codealphaCICD`) — build `20260715.1`
  completed successfully in 35s, triggered from the `main` branch (commit `5d9ce79e`)
- Build and push stage completed successfully (job "Build", 30s) — image built and pushed
  to Azure Container Registry `codealphaacrconfidence`, repository `afaezicodealphaazurecicd`
- App Service `codealpha-cicd-confidence` (Linux, B1 plan, Central US) — Status: Running
- Live app verified at `codealpha-cicd-confidence-dzahfwa2crgnfzb7.centralus-01.azurewebsites.net`,
  displaying "Hello from CodeAlpha Azure CI/CD Pipeline! — Deployed by Confidence Nwaokike"

## Demo
LinkedIn write-up (video walkthrough attached to the post):

> Wrapped up Task 1 of my CodeAlpha DevOps internship — building a CI/CD pipeline with Azure.
>
> For this one I containerized a Node/Express app, set up an Azure Container Registry, and
> deployed it to Azure App Service. Then I built a pipeline in Azure DevOps that automatically
> builds and deploys the app every time I push to GitHub — no manual steps once it's set up.
>
> Honestly this was the task that felt most "real" so far. It's not just one tool in isolation
> — it's containers, cloud infra, and CI/CD all working together, which I think is closer to
> what the actual job looks like.
>
> GitHub repo: https://lnkd.in/e2xgF9yM
>
> Video walkthrough attached.
>
> Thanks to CodeAlpha for the hands-on structure.
>
> #DevOps #Azure #CodeAlpha #Internship

## Note on Azure resources
The Azure Container Registry and App Service used for this task were deprovisioned after
testing/recording to avoid ongoing charges on the free tier. The pipeline configuration,
screenshots, and demo video are the record of the working deployment.
