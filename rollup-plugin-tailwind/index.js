import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default function css(options = {}) {
  return {
    name: 'tailwindcss',

    async generateBundle(opts, bundle) {
        let result = await postcss([autoprefixer, tailwindcss])
            .process(`@tailwind base; @tailwind components; @tailwind utilities;`, { from: undefined });

        this.emitFile({type: 'asset', fileName: 'tailwind.css', source: result.css});
    }
  }
}