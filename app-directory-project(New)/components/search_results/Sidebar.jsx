import DealsFilter from "../../components/search_results/sidebar/DealsFilter";
import Map from "../../components/search_results/sidebar/Map";
import SearchBox from "../../components/search_results/sidebar/SearchBox";
import PopularFilters from "../../components/search_results/sidebar/PopularFilters";
import AminitesFilter from "../../components/search_results/sidebar/AminitesFilter";
import RatingsFilter from "../../components/search_results/sidebar/RatingsFilter";
import GuestRatingFilters from "../../components/search_results/sidebar/GuestRatingFilters";
import StyleFilter from "../../components/search_results/sidebar/StyleFilter";
import NeighborhoddFilter from "../../components/search_results/sidebar/NeighborhoddFilter";
import PirceSlider from "../../components/search_results/sidebar/PirceSlider";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border position-relative">
        <Map />
      </div>
      {/* End find map */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Search by destination</h5>
        <SearchBox />
      </div>
      {/* End search box */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Deals</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-5 items-center">
            <DealsFilter />
          </div>
        </div>
      </div>
      {/* End deals filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Popular Filters</h5>
        <div className="sidebar-checkbox">
          <PopularFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Nightly Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Aminities</h5>
        <div className="sidebar-checkbox">
          <AminitesFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div>
      {/* End rating filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Guest Rating</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div>
      {/* End Guest Rating */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Types</h5>
        <div className="sidebar-checkbox">
          <StyleFilter />
        </div>
      </div>
      {/* End style filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Continent</h5>
        <div className="sidebar-checkbox">
          <NeighborhoddFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
