import { defineComponent } from "vue";
import pkg from "../../package.json";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>
          {pkg.name}@{pkg.version}
        </h1>

        <p>{pkg.description}</p>

        <nav>
          <ul>
            <li>
              <a href={pkg.repository.url}>GitHub</a>
            </li>
            <li>
              <a href={`https://www.npmjs.com/package/${pkg.name}`}>npm</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  },
});
