import { CategoriesSelection } from "./CategorySelection";
import { FeaturedPoduct } from "./FeaturedProduct";

export default function IndexPage() {
    return (
        <div>
            <FeaturedPoduct />
            <CategoriesSelection />
        </div>
    );
}