import Layout from '../components/CustomLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="stencil-js" name="Introduzione a StencilJS" />
        <PostLink id="web-component" name="Web Component"/>
        <PostLink id="webxr-a-frame" name="WebXR with a-frame"/>
      </ul>
    </Layout>
  );
}