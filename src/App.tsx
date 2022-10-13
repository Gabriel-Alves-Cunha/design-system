import { Envelope, Lock } from "phosphor-react";

import { TextInput } from "./components/TextInput";
import { ReactLogo } from "./components/ReactLogo";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

import "./styles/global.css";

export function App() {
	return (
		<main className="h-screen w-screen p-14 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<ReactLogo />

				<Heading size="lg" className="mt-4">
					Ignite Lab
				</Heading>

				<Text size="lg" className="text-gray-400 mt-1">
					Faça login e comece a usar!
				</Text>
			</header>

			<form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold">Endereço de e-mail</Text>

					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>

						<TextInput.Input
							placeholder="Digite seu e-mail"
							type="email"
							id="email"
						/>
					</TextInput.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold">Sua senha</Text>

					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>

						<TextInput.Input
							placeholder="***********"
							type="password"
							id="password"
						/>
					</TextInput.Root>
				</label>

				<label
					className="flex items-center gap-2 cursor-pointer"
					htmlFor="remember"
				>
					<Checkbox id="remember" />

					<Text size="sm" className="text-gray-200">
						Lembrar de mim por 30 dias
					</Text>
				</label>

				<Button type="submit" className="mt-4">
					Entrar na plataforma
				</Button>
			</form>

			<footer className="flex flex-col items-center gap-4 mt-8">
				<Text asChild size="sm">
					<a
						className="text-gray-400 underline underline-offset-2 hover:text-gray-200"
						href="#"
					>
						Esqueceu sua senha?
					</a>
				</Text>

				<Text asChild size="sm">
					<a
						className="text-gray-400 underline underline-offset-2 hover:text-gray-200"
						href="#"
					>
						Não possui conta? Crie uma agora!
					</a>
				</Text>
			</footer>
		</main>
	);
}
