import React, { useState } from "react";

import {Carousel} from "react-bootstrap";

import ForecastTile from "./ForecastTile";

interface ForecastCarouselProps {
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function ForecastCarousel(props: ForecastCarouselProps) {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex:any, e:any) => {
        setIndex(selectedIndex);
    };

    return (
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
            >
                {
                    props.pollution.list.slice(0, 5).map((data: Record<any, any>, index: number) => (
                        <ForecastTile
                            pm10={data.components.pm10}
                            pm25={data.components.pm2_5}
                            forecast={props.weather.daily[index + 1]}
                            key={`forecastTile${index}`}
                        />
                    ))
                }
            </Carousel>
    )
}
