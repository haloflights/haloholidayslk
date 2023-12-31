import Link from "next/link";
import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
  <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
    <h4 className="text-16 fw-500 mb-30 hover-effect">{item.title}</h4>
    <div className="d-flex y-gap-10 flex-column">
      {item.menuList.map((menu, i) => (
        <Link href={menu.routerPath} key={i} className="hover-effect">
          {menu.name}
        </Link>
      ))}
    </div>
  </div>
))}

    </>
  );
};

export default FooterContent;
