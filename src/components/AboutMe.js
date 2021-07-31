import { useEffect } from "react";

const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center">About Me</p>
                    <p className="mt-4 display-6">Greetings!</p>
                    <p className="indented">
                        <span className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
                        Assumenda nemo labore dolor eaque facilis eius reprehenderit id, quos recusandae distinctio nesciunt blanditiis, consequuntur mollitia molestias. Asperiores obcaecati nam necessitatibus reprehenderit ad consequuntur illo possimus distinctio incidunt delectus similique, provident sapiente non nulla tenetur veritatis dicta eaque molestiae modi, commodi facilis?
                    </p>
                    <p className="indented">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero dolorum unde modi id numquam corporis temporibus officia. Cumque quod, modi unde ex, quibusdam, ad minima facilis blanditiis sapiente et fugiat porro? Assumenda autem, cumque illum aspernatur quod est voluptates rerum. Neque veritatis officia sed dolor dolorem corrupti, odit magnam qui. <span className="text-primary">Modi ratione earum libero, commodi similique illo error ipsum</span>. at laudantium assumenda ab ipsa id. Laborum expedita aut quidem sunt cum fuga corrupti obcaecati, dolores enim hic aperiam itaque.
                    </p>
                    <p className="indented">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt quasi praesentium repellat placeat dicta vitae voluptatum. Architecto voluptatum modi asperiores quaerat sed nemo alias. Explicabo animi ab debitis, recusandae consequuntur sunt atque, fuga soluta sit magni consequatur ex dolor repellendus molestias <span className="text-secondary">magnam ullam</span>, at temporibus deserunt cumque. Quia ea vel magnam expedita architecto. Perferendis magnam dolorem, rerum excepturi dolorum, ex molestias nam aliquid fugiat ipsam est ratione eos laborum, placeat fuga voluptatum dolores mollitia velit corporis pariatur explicabo quam enim error? Voluptatibus quidem aliquam facere illum. Alias labore reiciendis provident odit. Mollitia accusantium omnis voluptatum fugiat. Laborum recusandae aliquam incidunt earum amet fuga sequi. Dolor, earum debitis molestias dolores facilis sint cumque eius id, libero ea magnam tempora nam!
                    </p>
                    <p className="py-5" />
                </div>
            </div>

        </div>
    );
}

export default AboutMe;