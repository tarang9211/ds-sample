# Design System Sample

This repository, `ds-sample` is a sample project of an extremely basic button component. This project uses the following tech stack (with no opinion, whatsoever)

- Next.js
- Emotion
- React
- Typescript

### Setup

1. `git clone https://github.com/tarang9211/ds-sample.git`
2. `yarn`
3. `yarn dev`
4. `Navigate to localhost:3000 in your browser`

### Sample usage

Assuming the component will be imported from within the `pages` directory, one can import it in the following way

`import { Button } from '../design-system/button`

```jsx
<Button type="primary" bgColor="purple">
  Button
</Button>
```
