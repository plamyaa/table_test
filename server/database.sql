--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-07-29 11:05:49 +03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16438)
-- Name: dbase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dbase (
    id integer NOT NULL,
    date date,
    name character varying(255),
    amount integer,
    distance numeric(10,2)
);


ALTER TABLE public.dbase OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16437)
-- Name: dbase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dbase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dbase_id_seq OWNER TO postgres;

--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 209
-- Name: dbase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dbase_id_seq OWNED BY public.dbase.id;


--
-- TOC entry 3430 (class 2604 OID 16441)
-- Name: dbase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dbase ALTER COLUMN id SET DEFAULT nextval('public.dbase_id_seq'::regclass);


--
-- TOC entry 3573 (class 0 OID 16438)
-- Dependencies: 210
-- Data for Name: dbase; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.dbase VALUES (1, '2021-05-21', 'Airbus', 185, 143.13);
INSERT INTO public.dbase VALUES (2, '2021-04-27', 'Boeing747', 362, 1040.84);
INSERT INTO public.dbase VALUES (3, '2021-07-28', 'AN-225', 126, 680.54);
INSERT INTO public.dbase VALUES (4, '2022-03-04', 'A320', 258, 934.41);
INSERT INTO public.dbase VALUES (5, '2020-10-30', 'Airbus', 515, 4541.54);
INSERT INTO public.dbase VALUES (6, '2019-09-16', 'Airbus', 351, 545.15);
INSERT INTO public.dbase VALUES (7, '2019-09-16', 'Boeing747', 415, 852.51);
INSERT INTO public.dbase VALUES (8, '2021-04-11', 'Boeing747', 235, 952.21);
INSERT INTO public.dbase VALUES (9, '2021-04-16', 'AN-225', 493, 1345.65);
INSERT INTO public.dbase VALUES (10, '2021-05-06', 'AN-225', 356, 1695.34);
INSERT INTO public.dbase VALUES (11, '2022-02-24', 'AN-225', 166, 495.34);
INSERT INTO public.dbase VALUES (12, '2021-06-10', 'A320', 200, 1952.09);
INSERT INTO public.dbase VALUES (13, '2021-06-10', 'A320', 262, 1252.01);


--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 209
-- Name: dbase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dbase_id_seq', 13, true);


--
-- TOC entry 3432 (class 2606 OID 16443)
-- Name: dbase dbase_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dbase
    ADD CONSTRAINT dbase_pkey PRIMARY KEY (id);


-- Completed on 2022-07-29 11:05:49 +03

--
-- PostgreSQL database dump complete
--

