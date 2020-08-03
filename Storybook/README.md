
# Introduction
The development environment is designed to develop plug-in systems, but it can also serve any development projects based on react components. The development environment mainly includes the following components:
- Storybook: Visual development tool for  components
- Typescript: development language
- Tailwind: customization tool
- Ant-Design: component library

The development environment will be containerized and saved in Dockerhub, and I will maintain it.
You can pull it through docker with wangziling100/storybook

# Quick Start
```bash
docker run -it -p 9009:9009 wangziling100/storybook 
```

# Usage

```bash
docker run -it -p 3000:3000 -p 9009:9009 wangziling100/storybook sh
```
The project root directory is located at /workspace/default, you can start the storybook server with the following command:
```bash
yarn storybook
```
Start the react server:
```bash
yarn start
```



